import {Person} from "./person"

export class Contacts{
//Object es genérico para objeto para no tener que usar el objeto específcio de Person
    public people:Object[];
    
    constructor ( ){
       this.people = [];
                
                  
   }

   public printCalendar():Object[]{
   return this.people
}
}




