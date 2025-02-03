import { Module } from '@nestjs/common'
import { UserController } from './users.controller'
import { UsersService } from './users.service'
import { PasswordService } from '../auth/password.service'

@Module({
	providers: [UsersService, PasswordService],
	exports: [UsersService],
	controllers: [UserController],
})
export class UsersModule {}
