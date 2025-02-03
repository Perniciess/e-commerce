import { IsEmail, IsOptional, IsString } from 'class-validator'

export class UserDto {
	@IsOptional()
	@IsString()
	@IsEmail()
	email: string

	@IsString()
	@IsOptional()
	login: string

	@IsString()
	@IsOptional()
	password: string
}

export class UpdateUserDto extends UserDto {
	salt: string
}