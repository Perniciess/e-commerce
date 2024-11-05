import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import { ValidationPipe } from "@nestjs/common";
import { existsSync, mkdirSync } from "fs";
import { join } from "path";
import * as express from 'express';



async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const uploadDir = join(process.cwd(), "uploads");
    if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir);
    }
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());
    
    app.use('/uploads', express.static(join(process.cwd(), 'uploads')));  
    await app.listen(3000);
}
bootstrap();
