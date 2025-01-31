import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class getSessionDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsString()
    login: string;

    iat: number;

    exp: number;
}
