import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/auth.module";
import { PrismaModule } from "./prisma/prisma.module";
import { UsersService } from "./users/users.service";
import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from './categories/categories.module'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
    imports: [PrismaModule, AuthModule, ProductsModule, CategoriesModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '../..'),
            renderPath: '/uploads',
        }),
    ],
    controllers: [],
    providers: [UsersService],
})
export class AppModule {}


