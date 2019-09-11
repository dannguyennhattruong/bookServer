import { ApiModelProperty } from '@nestjs/swagger';
import { Category } from 'src/category/category.entity';

export class CreateBookDto {

  @ApiModelProperty()
  readonly name: string;

  
  @ApiModelProperty()
  readonly description: string;

  @ApiModelProperty()
  readonly image: string;

  @ApiModelProperty()
  readonly category: Category;
}