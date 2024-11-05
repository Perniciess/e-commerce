import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class signUpDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    login: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
