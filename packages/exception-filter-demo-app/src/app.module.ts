import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import {
  AuthGuard
// } from './auth.guard'; // uncomment this line and comment the one below to see the difference
} from 'nest-authorization-library';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
