import { UsersService } from "./users.service";
import {
    Controller,
    Param,
    Delete,
    Get,
    ParseIntPipe,
    Patch,
    Body,
    Res,
} from "@nestjs/common";
import { Response } from "express";
import { CookieService } from "src/modules/auth/cookie.service";
import { UpdateUserDto } from './dto/update-user.dto'

@Controller("/user")
export class UserController {
    constructor(
        private usersService: UsersService,
        private cookieService: CookieService,
    ) {}

    @Get("/all")
    async getAllUsers() {
        return this.usersService.getAllUsers();
    }

    @Get("/:id")
    async findById(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.findById(id);
    }

    @Delete("/delete/:id")
    async deleteUser(@Param("id", ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id);
    }

    @Patch("update/:id")
    async updateUser(
        @Param("id", ParseIntPipe) id: number,
        @Body() body: UpdateUserDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { accessToken } = await this.usersService.updateUser(id, body);
        this.cookieService.removeToken(res);
        this.cookieService.setToken(res, await accessToken);
    }
}
