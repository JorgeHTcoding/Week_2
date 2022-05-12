class Book {
    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;

    constructor(title:string,nPages:number,isbn:string,author:string,editorial:string){

        this.title = title;        
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    public setTitle(title:string):void{
        this.title = title;
        }
    public getTitle():string{
        return this.title
    }
    public setNPages(pages:number):void{
        this.nPages = pages;
        }
    public getNPages():number{
        return this.nPages
    }
    public setIsbn(isbn:string):void{
        this.isbn = isbn;
        }
    public getIsbn():string{
        return this.isbn
    }
    public setAuthor(author:string):void{
        this.author = author;
        }
    public getAuthor():string{
        return this.author
    }
    public setEditorial(editorial:string):void{
        this.editorial = editorial;
        }
    public getEditorial():string{
        return this.editorial
    
    }
    public toString1():string{
        return "Title - " + this.getTitle() + "\n" + "Number of pages - " + this.getNPages() + "\n" + "ISBN - " + this.getIsbn() + "\n" 
        + "Author - " + this.getAuthor() + "\n" + "Editorial - " + this.getEditorial();        

    }   
}

let book1 = new Book("Introducción a JavaScript.", 233,"2344433-BC23333" , "Joseph Smith", "Now Editions");
console.log(book1.toString());




