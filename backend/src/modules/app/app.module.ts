import * as path from 'node:path'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import { AuthModule } from '../auth/auth.module'
import { CategoriesModule } from '../categories/categories.module'
import { PrismaModule } from '../prisma/prisma.module'
import { ProductsModule } from '../products/products.module'
import { UsersService } from '../users/users.service'
import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
    imports: [
        PrismaModule,
        AuthModule,
        ProductsModule,
        CategoriesModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, '..', 'uploads'),
            serveStaticOptions: {
                index: false,
            },
        }),
        ConfigModule.forRoot(),
    ],
    controllers: [AppController],
    providers: [UsersService, AppService],
})
export class AppModule {}
