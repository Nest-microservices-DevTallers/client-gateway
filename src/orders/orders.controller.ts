import { ClientProxy, RpcException } from '@nestjs/microservices';
import { catchError } from 'rxjs';
import {
  ParseUUIDPipe,
  Controller,
  Inject,
  Param,
  Patch,
  Query,
  Post,
  Body,
  Get,
} from '@nestjs/common';

import { NATS_SERVICE } from '@server/config';
import { PaginationDto } from '@common/dto';

import { OrderPaginationDto, CreateOrderDto, StatusDto } from './dto';

@Controller('orders')
export class OrdersController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.client.send('createOrder', createOrderDto).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get()
  findAll(@Query() paginationDto: OrderPaginationDto) {
    return this.client.send('findAllOrders', paginationDto).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get(':status')
  findAllByStatus(
    @Param() { status }: StatusDto,
    @Query() paginationDto: PaginationDto,
  ) {
    return this.client.send('findAllOrders', { status, ...paginationDto }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Get('id/:id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.client.send('findOneOrder', id).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() statusDto: StatusDto) {
    return this.client.send('changeOrderStatus', { id, ...statusDto }).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }
}
