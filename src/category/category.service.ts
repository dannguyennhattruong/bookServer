import { Injectable, Inject} from '@nestjs/common';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @Inject('CategoryRepository') private readonly categoryRepository: typeof Category,
  ) {}

  async findAll(): Promise<Category[]> {
    return await this.categoryRepository.findAll<Category>();
  }

  async findById(ID: number): Promise<Category> {
    return await this.categoryRepository.findById(ID);
  }
  async create(createcategoryDto: CreateCategoryDto): Promise<Category> {
    return await this.categoryRepository.create<Category>(createcategoryDto);
  }

  async update(id: number, newValue: CreateCategoryDto): Promise<Category | null> {

    let category = await this.categoryRepository.findById<Category>(id);

    if (!category.id) {
      // tslint:disable-next-line:no-console
      console.error('user doesn\'t exist');
    }

    category = this._assign(category, newValue);

    return await category.save({ returning: true });
  }

  public async delete(ID: number): Promise<number> {

    return await this.categoryRepository.destroy({
      where: { ID },
    });
  }

  private _assign(category: CreateCategoryDto, newValue: CreateCategoryDto): Category {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(category['dataValues'])) {
      if (category[key] !== newValue[key]) {
        //
        category[key] = newValue[key];
      }
    }
    return category as Category;
  }
}