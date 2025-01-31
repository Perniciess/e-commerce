import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { CategoriesController } from './categories.controller'
import { CategoriesService } from './categories.service'

@Module({
	imports: [ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, '..', 'uploads') })],
	providers: [CategoriesService],
	exports: [CategoriesService],
	controllers: [CategoriesController],
})
export class CategoriesModule {}
