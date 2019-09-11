import { Injectable, Inject} from '@nestjs/common';
import { Book } from './books.entity';
import { CreateBookDto } from './dto/createBook.dto';

@Injectable()
export class BookService {
  constructor(
    @Inject('BookRepository') private readonly BookRepository: typeof Book,
  ) {}

  async findAll(): Promise<Book[]> {
    return await this.BookRepository.findAll<Book>();
  }

  async findById(ID: number): Promise<Book> {
    return await this.BookRepository.findById(ID);
  }
  async create(createBookDto: CreateBookDto): Promise<Book> {
    return await this.BookRepository.create<Book>(createBookDto);
  }

  async update(id: number, newValue: CreateBookDto): Promise<Book | null> {

    let book = await this.BookRepository.findById<Book>(id)
    console.log(book);

    if (!book.id) {
      // tslint:disable-next-line:no-console
      console.error('user doesn\'t exist');
    }

    book = this._assign(book, newValue);

    return await book.save({ returning: true });
  }

  public async delete(ID: number): Promise<number> {

    return await this.BookRepository.destroy({
      where: { ID },
    });
  }

  private _assign(book: CreateBookDto, newValue: CreateBookDto): Book {
    // tslint:disable-next-line:no-string-literal
    for (const key of Object.keys(book['dataValues'])) {
      if (book[key] !== newValue[key]) {
        //
        book[key] = newValue[key];
      }
    }
    return book as Book;
  }
}