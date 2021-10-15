import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  @Injectable()
  export class AuthGuard implements CanActivate {
    canActivate(_context: ExecutionContext): boolean {
      const value = randomInteger(1, 2);
      if (value > 1) {
        throw new UnauthorizedException('ERROR');
      }

      return true;
    }
  }
