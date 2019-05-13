
export class Author {
    public firstName: string;
    public lastName: string;
}

export class Book {

    public bookId: number;
    public imageUrl:  string;
    public title: string;
    public authors: [Author];
    public category: string;
    public publisher: string;
    public noOfPages: number;
    public rating: number;
    public edition: number;
    public price: number;
    public releaseDate: Date;
}
