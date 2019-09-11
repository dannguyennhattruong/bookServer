import { Module } from '@nestjs/common';


import { DatabaseModule } from '../database/database.module';
import { BooksController } from './books.controller';
import { BookService } from './books.service';
import { BookProviders } from './book.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BookService, ...BookProviders ],
})
export class BooksModule {}