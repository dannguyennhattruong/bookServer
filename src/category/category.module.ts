import { Module } from '@nestjs/common';


import { DatabaseModule } from '../database/database.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryProviders } from './category.providers';


@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CategoryService, ...CategoryProviders ],
})
export class CategoriesModule {}