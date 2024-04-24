import { ClientProxy, RpcException } from '@nestjs/microservices';
import {
  Controller,
  Inject,
  Body,
  Post,
  Get,
  Req,
  UseGuards,
} from '@nestjs/common';
import { catchError } from 'rxjs';

import { NATS_SERVICE } from '@server/config';

import { LoginUserDto, RegisterUserDto } from './dto';
import { CurrentUserInterface } from './interfaces';
import { User, Token } from './decorators';
import { AuthGuard } from './guards';

@Controller('auth')
export class AuthController {
  constructor(@Inject(NATS_SERVICE) private readonly client: ClientProxy) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.client.send('auth.register.user', registerUserDto).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.client.send('auth.login.user', loginUserDto).pipe(
      catchError((err) => {
        throw new RpcException(err);
      }),
    );
  }

  @UseGuards(AuthGuard)
  @Get('verify')
  verifyToken(@User() user: CurrentUserInterface, @Token() token: string) {
    return { user, token };
  }
}
