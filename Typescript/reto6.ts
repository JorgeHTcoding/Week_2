import {Book} from "./book"

class Library {
    private books:Book[];
    private address:string;
    private manager:string;

        constructor(books:Book[],address:string,manager:string){

        this.books = books;        
        this.address = address;
        this.manager = manager;
        
       
    }   
    public setAddress(address:string):void{
        this.address = address
        }
    public getAddress():string{
        return this.address
    }
    public setManager(manager:string):void{
        this.manager = manager;
        }
    
   
    public toStringBook():string{
        let resultado:string = "";
       
    for(let i = 0; i < this.books.length; i++){
        resultado += "Book" + (i+1) + "\n" + this.books[i].toString1() + "\n"; 

    } return resultado
                 
         } 
         
    public getManager():string{
        return this.manager
    }
    public getAuthor(author:string):Book[]{
        let resultadoAutor = [];      
        for(let i = 0 ; i < this.books.length; i++){ 
          if(this.books[i].getAuthor() === author)   
        resultadoAutor.push(this.books[i])            
        }      return resultadoAutor  
    } 
}   


    
       
     

    

let bookA = new Book("Los hijos de Húrin", 336,"2342145-BC261243" , "J.R.R. Tolkien", "Minotauro");
let bookB = new Book("Los hijos de Túrin", 336,"2342145-BC261243" , "J.R.R. Rododendro", "Minotauro");

let library1 = new Library ([bookA ,bookB], "Villa del Pedregal", "Antonio Pasiego");

console.log(library1.getAuthor("J.R.R. Tolkien"))


        