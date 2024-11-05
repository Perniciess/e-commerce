import { ServeStaticModule } from '@nestjs/serve-static'
import { CategoriesController } from './categories.controller'
import { CategoriesService } from "./categories.service";
import * as path from 'path'


import { Module } from "@nestjs/common";

@Module({
    imports: [ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, '..', 'uploads') })],
    providers: [CategoriesService ],
    exports: [CategoriesService],
    controllers: [CategoriesController]
})
export class CategoriesModule {}
