import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();//to tell we are working with http not on any we
    const response= ctx.getResponse<Response>();
    const request=ctx.getRequest<Request>()//to access request from frontend
    const status=exception.getStatus()

    response.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        message: exception.message || null,
    })
  }
}