import { Module } from '@nestjs/common'
import { CookieService } from 'src/modules/auth/cookie.service'
import { UserController } from './users.controller'
import { UsersService } from './users.service'

@Module({
	providers: [UsersService, CookieService],
	exports: [UsersService],
	controllers: [UserController],
})
export class UsersModule {}
