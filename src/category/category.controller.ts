import { Controller, Get, Response, HttpStatus, Param, Body, Post, Request, Patch, Delete } from '@nestjs/common';

import { ApiUseTags, ApiResponse } from '@nestjs/swagger';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.dto';

@ApiUseTags('categories')
@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get()
    public async getcategorys(@Response() res) {
        const categorys = await this.categoryService.findAll();
        return res.status(HttpStatus.OK).json(categorys);
    }

    @Get('/:id')
    public async getcategory(@Response() res, @Param() param) {
        const categorys = await this.categoryService.findById(param.id);
        return res.status(HttpStatus.OK).json(categorys);
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    public async createcategory(@Response() res, @Body() createcategoryDTO: CreateCategoryDto) {
        console.log('we go here')
        const category = await this.categoryService.create(createcategoryDTO);
        return res.status(HttpStatus.OK).json(category);
    }

    @Patch('/:id')
    public async updatecategory(@Param() param, @Response() res, @Body() body) {

        const category = await this.categoryService.update(param.id, body);
        return res.status(HttpStatus.OK).json(category);
    }

    @Delete('/:id')
    public async deletecategory(@Param() param, @Response() res) {

        const category = await this.categoryService.delete(param.id);
        return res.status(HttpStatus.OK).json(category);
    }
}