import { Body, Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUserParamDto } from "./dto/get-user-param.dto";

@Controller('users')
export class UserController {
    constructor(private usersService: UsersService){}

    @Get('')
    getUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limi: number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number, 
        @Query('gender') gender:string,
        @Param() params: GetUserParamDto
    ) {
        console.log("paramsparams",params)
        if(gender) {
            return this.usersService.getAllUsers().filter(user => user.gender === gender)
        }
        return this.usersService.getAllUsers();
    }

    @Get(':isMarried')
    getUsersByIsMarried(
        @Param() params: GetUserParamDto
    ) {
        console.log("paramsparams",params)
        return this.usersService.getAllUsers();
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id:number) {
        return this.usersService.getUserById(id)
    }

    @Post()
    createUser(@Body() user: CreateUserDto) {
        // this.usersService.createUser(body.user)
        return 'a new user has been created';
    }
}