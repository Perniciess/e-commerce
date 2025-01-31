import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

import { AuthModule } from '../auth/auth.module';
import { CategoriesModule } from '../categories/categories.module';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductsModule } from '../products/products.module';
import { UsersService } from '../users/users.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    ],
    controllers: [AppController],
    providers: [UsersService, AppService],
})

export class AppModule {}
