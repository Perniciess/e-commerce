import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/modules/prisma/prisma.service'
import { PasswordService } from '../auth/password.service'
import { UpdateUserDto } from './dto/user.dto'

@Injectable()
export class UsersService {
	constructor(
		private prisma: PrismaService,
		private passwordService: PasswordService,
	) {}

	async createUser(email: string, login: string, password: string, salt: string) {
		return this.prisma.user.create({ data: { email, login, password, salt } })
	}

	async deleteUser(id: string) {
		return this.prisma.user.delete({ where: { id } })
	}

	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: { id },
		})
	}

	async getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email },
		})
	}

	async getAllUsers() {
		return this.prisma.user.findMany({
			select: {
				id: true,
				email: true,
				login: true,
				role: true,
			},
		})
	}

	async updateUser(id: string, dto: UpdateUserDto) {
		let data = dto

		if (data.password) {
			const salt = this.passwordService.getSalt()
			const password = this.passwordService.getHash(data.password, salt)
			data = { ...data, password, salt }
		}

		await this.prisma.user.update({ where: { id }, data })
	}

	async getProfile(userId: string) {
		const { ...userResult } = await this.getById(userId)

		const { password, salt, ...user } = userResult

		return { user }
	}
}
