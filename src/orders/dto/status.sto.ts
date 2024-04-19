import { OrderStatusEnum } from '@orders/enum';
import { IsEnum, IsOptional } from 'class-validator';

export class StatusDto {
  @IsEnum(OrderStatusEnum)
  status: OrderStatusEnum;
}
