import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';

import { envs, PRODUCT_SERVICE } from '@server/config';

import { ProductsController } from './products.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: PRODUCT_SERVICE,
        transport: Transport.TCP,
        options: {
          host: envs.productsMicroserviceHost,
          port: envs.productsMicroservicePort,
        },
      },
    ]),
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
