import { Module, forwardRef } from "@nestjs/common";
import { UserController } from "./users.controller";
import { UsersService } from "./users.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
    controllers:[
        UserController
    ],
    providers:[
        UsersService
    ],
    exports:[
        UsersService
    ],
    imports: [
        forwardRef(()=> (AuthModule))
    ]
})
export class UserModule {}