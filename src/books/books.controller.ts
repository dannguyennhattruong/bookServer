import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';

import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { BookService } from './books.service';
import { CreateBookDto } from './dto/createBook.dto';

@ApiUseTags('books')
@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BookService) { }

    @Get()
    public async getbooks(@Response() res) {
        const books = await this.booksService.findAll();
        return res.status(HttpStatus.OK).json(books);
    }

    @Get('/:id')
    public async getbook(@Response() res, @Param() param) {
        const books = await this.booksService.findById(param.id);
        return res.status(HttpStatus.OK).json(books);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async createbook(@Response() res, @Body() createbookDTO: CreateBookDto) {

        const book = await this.booksService.create(createbookDTO);
        return res.status(HttpStatus.OK).json(book);
    }

    @Patch('/:id')
    public async updatebook(@Param() param, @Response() res, @Body() body) {

        const book = await this.booksService.update(param.id, body);
        return res.status(HttpStatus.OK).json(book);
    }

    @Delete('/:id')
    public async deletebook(@Param() param, @Response() res) {

        const book = await this.booksService.delete(param.id);
        return res.status(HttpStatus.OK).json(book);
    }
}