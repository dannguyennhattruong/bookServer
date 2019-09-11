import { ApiModelProperty } from '@nestjs/swagger';
import { Category } from 'src/category/category.entity';

export class CreateCategoryDto {

  @ApiModelProperty()
  readonly name: string;

  
  @ApiModelProperty()
  readonly description: string;

}