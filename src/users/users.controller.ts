import { Body, Controller, DefaultValuePipe, forwardRef, Get, Inject, Param, ParseIntPipe, Post, Query } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { GetUserParamDto } from "./dto/get-user-param.dto";
import { AuthService } from "src/auth/auth.service";

@Controller('users')
export class UserController {
    constructor(
        private usersService: UsersService,
        @Inject(forwardRef(() => AuthService)) private readonly authService: AuthService
    ){}

    @Get('')
    getUsers(
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limi: number, 
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page:number, 
        @Query('gender') gender:string,
        @Param() params: GetUserParamDto
    ) {
        if(gender) {
            return this.usersService.getAllUsers().filter(user => user.gender === gender)
        }
        if(this.authService.isAuthenticated){
            return this.usersService.getAllUsers();
        }
        return 'User not authenticated'
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