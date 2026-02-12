import { Controller, Get, Post } from "@nestjs/common";

@Controller('users')
export class UserController {

    @Get()
    getUsers() {
        return "you made request to get all users"
    }

    @Post()
    createUser() {
        return 'a new user has been created:'
    }
}