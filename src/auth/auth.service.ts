import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(@Inject(forwardRef(()=> UsersService)) private readonly userService: UsersService) {}

    isAuthenticated: boolean = false;

    login(email: string, password: string) {
        const user = this.userService.users.find(user => user.email === email && user.password === password)
        if (user) {
            this.isAuthenticated = true
            return 'My Token'
        }
        return "User does not exist"
    }
}
