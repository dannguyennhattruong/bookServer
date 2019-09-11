import { Book } from './books.entity';

export const BookProviders = [
    {
        provide: 'BookRepository',
        useValue: Book,
    },
];