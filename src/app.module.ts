import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BooksModule } from './books/books.module';
import { CategoriesModule } from './category/category.module';

@Module({
  imports: [DatabaseModule, BooksModule,CategoriesModule],
  controllers: [AppController],
  providers: [AppService, DatabaseModule],
})
export class AppModule {}
