import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import * as cookieParser from 'cookie-parser'
import * as express from 'express'
import { join } from 'path'
import { CustomExceptionFilter } from './common/filters/not-found.filter'
import { AppModule } from './modules/app/app.module'

async function bootstrap() {
	const app = await NestFactory.create(AppModule)
	app.use(cookieParser())
	app.useGlobalPipes(new ValidationPipe())
	app.useGlobalFilters(new CustomExceptionFilter())
	app.enableCors({
		origin: true,
		methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
		credentials: true,
	})
	app.use('/uploads', express.static(join(process.cwd(), '/', 'uploads')))
	await app.listen(3000)
}
bootstrap()
