import { Module } from '@nestjs/common';

import { NatsModule } from '@transports/nats.module';

import { ProductsController } from './products.controller';

@Module({
  imports: [NatsModule],
  controllers: [ProductsController],
})
export class ProductsModule {}
