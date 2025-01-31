import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Res,
    UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { SessionInfo } from '../../common/decorators/session-info.decorator';
import { AuthGuard } from '../../common/guards/auth.guard';
import { AuthService } from './auth.service';
import { CookieService } from './cookie.service';
import { getSessionDto } from './dto/getSession.dto';
import { signInDto } from './dto/signIn.dto';
import { signUpDto } from './dto/signUp.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private cookieService: CookieService,
    ) {}

    @Post('sign-up')
    @HttpCode(HttpStatus.CREATED)
    async signUp(
        @Body() body: signUpDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { accessToken } = await this.authService.signUp(body);
        this.cookieService.setToken(res, await accessToken);
    }

    @Post('sign-in')
    @HttpCode(HttpStatus.OK)
    async signIn(
        @Body() body: signInDto,
        @Res({ passthrough: true }) res: Response,
    ) {
        const { accessToken } = await this.authService.signIn(body);
        this.cookieService.setToken(res, await accessToken);
    }

    @Post('sign-out')
    @HttpCode(HttpStatus.OK)
    @UseGuards(AuthGuard)
    signOut(@Res({ passthrough: true }) res: Response) {
        this.cookieService.removeToken(res);
    }

    @Get('session')
    @UseGuards(AuthGuard)
    getSessionInfo(@SessionInfo() session: getSessionDto) {
        return session;
    }
}
