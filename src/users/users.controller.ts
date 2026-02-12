import { Body, Controller, Get, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import type { UserType } from "./users.service";

@Controller('users')
export class UserController {

    @Get()
    getUsers() {
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Post()
    createUser(@Body() body:{user: UserType}) {
        const usersService = new UsersService();
        usersService.createUser(body.user)
        return 'a new user has been created';
    }
}