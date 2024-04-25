import { IsEnum, IsOptional } from 'class-validator';

import { OrderStatusEnum } from '@orders/enum';
import { PaginationDto } from '@common/dto';

export class OrderPaginationDto extends PaginationDto {
  @IsEnum(OrderStatusEnum)
  @IsOptional()
  status: OrderStatusEnum;
}
