import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
  catch(exception: UnauthorizedException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus();

    console.log('response', JSON.stringify(exception, null, 2));
    console.log('response', JSON.stringify(typeof exception, null, 2));
    console.log(
      'response',
      JSON.stringify(exception instanceof HttpException, null, 2),
    );
    console.log(
      'response',
      JSON.stringify(exception instanceof UnauthorizedException, null, 2),
    );
    console.log(
      'response',
      JSON.stringify(exception instanceof Error, null, 2),
    );
    console.log(
      'response',
      JSON.stringify(exception.constructor.name, null, 2),
    );
    console.log('response', JSON.stringify(exception.stack, null, 2));

    response.status(status).json({
      error: exception.message,
      statusCode: status,
      success: false,
    });
  }
}
