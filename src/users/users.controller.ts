import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import type { UserType } from "./users.service";

@Controller('users')
export class UserController {

    @Get()
    getUsers(@Query() query: any) {
        const usersService = new UsersService();
        if(query?.gender) {
            return usersService.getAllUsers().filter(user => user.gender === query.gender)
        }
        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id:string) {
        const usersService = new UsersService();
        return usersService.getUserById(+id)
    }

    @Post()
    createUser(@Body() body:{user: UserType}) {
        const usersService = new UsersService();
        usersService.createUser(body.user)
        return 'a new user has been created';
    }
}