import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller('users')
export class UserController {

    @Get()
    getUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limi: number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number, 
        @Query('gender') gender:string
    ) {
        const usersService = new UsersService();
        if(gender) {
            return usersService.getAllUsers().filter(user => user.gender === gender)
        }
        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number) {
        const usersService = new UsersService();
        return usersService.getUserById(id)
    }

    @Post()
    createUser(@Body(new ValidationPipe()) user: CreateUserDto) {
        // const usersService = new UsersService();
        // usersService.createUser(body.user)
        return 'a new user has been created';
    }
}