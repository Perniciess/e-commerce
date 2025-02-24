import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from './../users/users.service'
import { signInDto } from './dto/signIn.dto'
import { signUpDto } from './dto/signUp.dto'
import { PasswordService } from './password.service'

@Injectable()
export class AuthService {
	constructor(
		private usersService: UsersService,
		private passwordService: PasswordService,
		private jwtService: JwtService,
	) {}

	async signUp(dto: signUpDto) {
		const user = await this.usersService.findByEmail(dto.email)
		if (user) {
			throw new BadRequestException({ type: 'Почта уже используется' })
		}

		const salt = this.passwordService.getSalt()
		const hash = this.passwordService.getHash(dto.password, salt)
		const newUser = await this.usersService.createUser(dto.email, dto.login, hash, salt)

		return this.issueToken(newUser.id)
	}

	async signIn(dto: signInDto) {
		const user = await this.usersService.findById(dto.email)
		if (!user) {
			throw new UnauthorizedException({ type: 'Пользователь не найден' })
		}

		const hash = this.passwordService.getHash(dto.password, user.salt)
		if (hash !== user.hash) {
			throw new UnauthorizedException({ type: 'Wrong password' })
		}

		return this.issueToken(user.id)
	}

	private issueToken(userId: string) {
		const accessToken = this.jwtService.sign({
			id: userId,
			expiresIn: '1h',
		})

		const refreshToken = this.jwtService.sign({
			id: userId,
			expiresIn: '7d',
		})

		return { accessToken, refreshToken }
	}

	async getNewTokens(refreshToken: string) {
		const result = await this.jwtService.verifyAsync(refreshToken)

		if (!result) throw new UnauthorizedException('Invalid refresh token')

		const { ...userResult } = await this.usersService.findById(result.id)

		if (!userResult) {
			throw new UnauthorizedException({ type: 'User not found' })
		}

		const { hash, salt, ...user } = userResult

		const tokens = this.issueToken(user.id)

		return {
			user,
			...tokens,
		}
	}
}
