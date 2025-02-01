import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/modules/prisma/prisma.service'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
	constructor(private prisma: PrismaService) {}

	async findById(id: string) {
		return this.prisma.user.findUnique({
			where: { id },
		})
	}

	async findByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: { email },
		})
	}

	async createUser(email: string, login: string, hash: string, salt: string) {
		return this.prisma.user.create({ data: { email, login, hash, salt } })
	}

	async deleteUser(id: string) {
		return this.prisma.user.delete({ where: { id } })
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

	async updateUser(id: string, data: UpdateUserDto) {
		await this.prisma.user.update({ where: { id }, data })
	}
}
