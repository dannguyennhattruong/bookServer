import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { IDefineOptions } from 'sequelize-typescript/lib/interfaces/IDefineOptions';
import { Category } from 'src/category/category.entity';


const tableOptions: IDefineOptions = { timestamps: true } as IDefineOptions;
@Table(tableOptions)
export class Book extends Model<Book> {
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

  @Column
  image : string

  @Column
  author : string

  @ForeignKey(() => Category)
  @Column
  categoryId : number 

  @BelongsTo(() => Category,'id')
  category: Category;

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;
}