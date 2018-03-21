export interface VersionInfo{
    Years:string;
    CompanyName:string;
    Version:string;
}

export interface User{
    username: string;
    password:string;
    errormessage:string;
}

export interface loggedinUser{
  username:string;
  fullname:string;
  email:string;
  loggedinTime:Date;
  token:string;
}

export interface Book{
    Bookid:string;
    bookTitle:string;
    bookDesc:string;
    bookAuthers:string[];
    bookpublished:Boolean;
    bookFirstPublishedOn:Date;
    Revision:number;
    bookLastPublishedOn:Date;
    BookPrice:number;
    Chapters:BookChapters[];
}

export interface BookChapters{
    chapterId:string;
    bookId:string;
    chapterNumber:number;
    chapterTitle:string;
    chapterContent:string;
    chapterPrice:number;
    isChapterPublished:Boolean;

}


export interface BoughtBook {
    BoughtBookId:string;
    Bookid:string;
    ChaptersBought:string[];
}



export  interface Shelf{
    ShelfId:string;
    ShelfOwner:string;
    BoughtBooks:BoughtBook[];
}
