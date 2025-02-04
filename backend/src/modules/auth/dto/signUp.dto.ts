import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'

export class signUpDto {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsNotEmpty()
    @IsString()
    login: string

    @IsNotEmpty()
    @MinLength(6)
    password: string
}
