import { ClientProxy } from '@nestjs/microservices';
import {
  ParseIntPipe,
  Controller,
  Delete,
  Inject,
  Param,
  Patch,
  Query,
  Post,
  Body,
  Get,
} from '@nestjs/common';

import { PRODUCT_SERVICE } from '@server/config';
import { PaginationDto } from '@common/dto';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  createProduct(@Body() body: any) {
    return `Crea un producto`;
  }

  @Get()
  findAllProducts(@Query() paginationDto: PaginationDto) {
    return this.productsClient.send(
      { cmd: 'find_all_products' },
      paginationDto,
    );
  }

  @Get(':id')
  findOneProduct(@Param('id', ParseIntPipe) id: string) {
    return `Producto con id ${id}`;
  }

  @Patch(':id')
  updateProduct(@Param('id', ParseIntPipe) id: string, @Body() body: any) {
    return `Actualiza producto con id ${id}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: string) {
    return `Elimina producto con id ${id}`;
  }
}
