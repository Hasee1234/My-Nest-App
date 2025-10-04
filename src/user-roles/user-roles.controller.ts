import { Controller, Get, UseGuards } from '@nestjs/common';
import { Role } from 'src/guards/roles/roles.anums';
import { Roles } from 'src/guards/roles/roles.decorator';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-roles')
export class UserRolesController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData(){
        return {message: 'only admin can access'};
    }

    @Get('User-data')
    // @UseGuards(RolesGuard)WE dont want to apply guard on user so...
    // @Roles(Role.user)
    getUserData(){
        return {message: 'anyone can access'};
    }
}
