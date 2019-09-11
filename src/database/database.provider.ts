import { Sequelize } from 'sequelize-typescript';
import { Book } from '../books/books.entity';
import { Category } from 'src/category/category.entity';

export const databaseProviders = [
    {
        provide: 'SequelizeToken',
        useFactory: async () => {
            const sequelize = new Sequelize({
              dialect: 'postgres',
              host: 'localhost',
              port: 5432,
              username: 'postgres',
              password: '25251325',
              database: 'nestBook',
            });
            sequelize.addModels([Book,Category]);
            await sequelize.sync();
            return sequelize;
        },
    },
];