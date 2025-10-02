import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();//the request that user have made 
    const authHeader = request.headers['authorization'];//go to headers of request and see value in authorization key
    return authHeader === 'Bearer my-secret-token';//if it matches then allow route otherwise false
  }
}
