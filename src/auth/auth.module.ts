import { Module } from '@nestjs/common';

import { NatsModule } from '@transports/nats.module';

import { AuthController } from './auth.controller';

@Module({
  imports: [NatsModule],
  controllers: [AuthController],
})
export class AuthModule {}
