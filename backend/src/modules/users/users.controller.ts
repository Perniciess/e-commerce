import { Body, Controller, Delete, Get, Param, Patch } from '@nestjs/common'
import { UpdateUserDto } from './dto/update-user.dto'
import { UsersService } from './users.service'

@Controller('/users')
export class UserController {
	constructor(private usersService: UsersService) {}

	@Get('/all')
	async getAllUsers() {
		return this.usersService.getAllUsers()
	}
	@Get('/:email')
	async findByEmail(@Param('email') email: string) {
		return this.usersService.findByEmail(email)
	}

	@Delete('/delete/:id')
	async deleteUser(@Param('id') id: string) {
		return this.usersService.deleteUser(id)
	}

	@Patch('update/:id')
	async updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
		return this.usersService.updateUser(id, dto)
	}
}
