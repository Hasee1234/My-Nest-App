import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './roles.anums';
import { stringify } from 'querystring';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector:Reflector){}//Reflector is used to access values in the metadata that we have set using custom decorator
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles=this.reflector.getAllAndOverride<Role[]>(//to fetch roles from decorator using reflector
      ROLES_KEY,[
        context.getHandler(),//to get method/handler metadata
        context.getClass(),//to get class metadata
      ]
    );
    if(!requiredRoles)return true;//if no roles are required then allow access 
    const request = context.switchToHttp().getRequest<{ headers: Record<string, string> }>(); // to get request and get data from headers    return true;
    const userRole=request.headers['x-user-role']as Role;//get role from headers
    return requiredRoles.includes(userRole);//if user role is in required roles then allow access otherwise not
  }
}
