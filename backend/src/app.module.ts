import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersService } from "./users/users.service";
import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from './categories/categories.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'
import { AppController } from './app.controller'
import { AppService } from './app.service'


@Module({
    imports: [PrismaModule, AuthModule, ProductsModule, CategoriesModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, "..", 'uploads'),
            serveStaticOptions: {
				index: false,
			}
        })
        ],
    controllers: [AppController],
    providers: [UsersService, AppService],
})
export class AppModule {}


