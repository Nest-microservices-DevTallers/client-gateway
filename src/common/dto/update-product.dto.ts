import { IsNumber, IsPositive } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

import { CreateProductDto } from './create-product.dto';
import { Type } from 'class-transformer';

export class UpdateProductDto extends PartialType(CreateProductDto) {}
