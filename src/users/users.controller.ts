import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUserParamDto } from "./dto/get-user-param.dto";

@Controller('users')
export class UserController {

    @Get('')
    getUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limi: number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number, 
        @Query('gender') gender:string,
        @Param() params: GetUserParamDto
    ) {
        console.log("paramsparams",params)
        const usersService = new UsersService();
        if(gender) {
            return usersService.getAllUsers().filter(user => user.gender === gender)
        }
        return usersService.getAllUsers();
    }

    @Get(':isMarried')
    getUsersByIsMarried(
        @Param() params: GetUserParamDto
    ) {
        console.log("paramsparams",params)
        const usersService = new UsersService();
        return usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number) {
        const usersService = new UsersService();
        return usersService.getUserById(id)
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        // const usersService = new UsersService();
        // usersService.createUser(body.user)
        return 'a new user has been created';
    }
}