import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, HasMany } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';
import { Book } from 'src/books/books.entity';

const tableOptions: IDefineOptions = { timestamps: true } as IDefineOptions;
@Table(tableOptions)
export class Category extends Model<Category> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    field: 'ID',
  })
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

  @HasMany(() => Book, 'id')
  books: Book[];
}