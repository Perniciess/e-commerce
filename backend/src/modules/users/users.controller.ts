/* eslint-disable ts/consistent-type-imports */
/* eslint-disable perfectionist/sort-imports */
import { Body, Controller, Delete, Get, Param, Put, UsePipes, ValidationPipe } from '@nestjs/common'
import { UpdateUserDto } from './dto/user.dto'
import { UsersService } from './users.service'
import { CurrentUser } from 'src/common/decorators/user.decorator'
import { Auth } from 'src/common/decorators/auth.decorator'

@Controller('/users')
export class UserController {
    constructor(private usersService: UsersService) {}

    @Get('/all')
    async getAllUsers() {
        return this.usersService.getAllUsers()
    }

    @Get('/:email')
    async findByEmail(@Param('email') email: string) {
        return this.usersService.getByEmail(email)
    }

    @Get()
    @Auth()
    async getProfile(@CurrentUser('id') id: string) {
        return this.usersService.getProfile(id)
    }

    @Delete('/delete/:id')
    async deleteUser(@Param('id') id: string) {
        return this.usersService.deleteUser(id)
    }

    @UsePipes(new ValidationPipe())
    @Put()
    @Auth()
    async updateUser(@CurrentUser('id') id: string, @Body() dto: UpdateUserDto) {
        return this.usersService.updateUser(id, dto)
    }
}
