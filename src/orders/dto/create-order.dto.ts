import { Type } from 'class-transformer';
import {
  IsPositive,
  IsOptional,
  IsBoolean,
  IsNumber,
  IsString,
  IsEnum,
} from 'class-validator';

import { OrderStatusEnum } from '@orders/enum';

export class CreateOrderDto {
  @Type(() => Number)
  @IsPositive()
  @IsNumber()
  totalAmount: number;

  @Type(() => Number)
  @IsPositive()
  @IsNumber()
  totalItems: number;

  @IsEnum(OrderStatusEnum)
  @IsOptional()
  @IsString()
  status?: OrderStatusEnum = OrderStatusEnum.PENDING;

  @IsOptional()
  @IsBoolean()
  paid?: boolean = false;
}
