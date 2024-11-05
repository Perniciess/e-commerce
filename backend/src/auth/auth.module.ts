import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { PasswordService } from "./password.service";
import { CookieService } from "./cookie.service";
import { JwtModule } from "@nestjs/jwt";
import { UsersModule } from "src/users/users.module";

@Module({
    imports: [
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: "1d" },
        }),
        UsersModule,
    ],
    controllers: [AuthController],
    providers: [AuthService, PasswordService, CookieService],
})
export class AuthModule {}
