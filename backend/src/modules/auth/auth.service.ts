import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { signInDto } from './dto/signIn.dto';
import { signUpDto } from './dto/signUp.dto';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private passwordService: PasswordService,
        private jwtService: JwtService,
    ) {}

    async signUp(dto: signUpDto) {
        const user = await this.usersService.findByEmail(dto.email);
        if (user) {
            throw new BadRequestException({ type: 'Почта уже используется' });
        }

        const salt = this.passwordService.getSalt();
        const hash = this.passwordService.getHash(dto.password, salt);
        const newUser = await this.usersService.createUser(
            dto.email,
            dto.login,
            hash,
            salt,
        );

        return this.createAccessToken(newUser.id, newUser.email, newUser.login);
    }

    async signIn(dto: signInDto) {
        const user = await this.usersService.findByEmail(dto.email);
        if (!user) {
            throw new UnauthorizedException({ type: 'Пользователь не найден' });
        }

        const hash = this.passwordService.getHash(dto.password, user.salt);
        if (hash !== user.hash) {
            throw new UnauthorizedException({ type: 'Неверный пароль' });
        }

        return this.createAccessToken(user.id, user.email, user.login);
    }

    async createAccessToken(id: number, email: string, login: string) {
        const accessToken = this.jwtService.signAsync({
            id: id,
            email: email,
            login: login,
        });

        return { accessToken };
    }
}
