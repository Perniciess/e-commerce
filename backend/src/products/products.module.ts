import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { MulterModule } from "@nestjs/platform-express";
import { diskStorage } from "multer";


@Module({
    controllers: [ProductsController],
    providers: [ProductsService],
    imports: [
        MulterModule.register({
            storage: diskStorage({
                destination: '../../uploads',
                filename: (req, file, cb) => {
                    const filename = `${Date.now()}-${file.originalname}`;
                    cb(null, filename);
                },
            }),
        }),
    ],
})
export class ProductsModule {}
