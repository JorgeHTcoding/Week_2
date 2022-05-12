export class Vector {
    private elements: number[]

    constructor(n:number,k:number){


      this.elements = elementsRandom(n,k)
         
       
       function elementsRandom(n: number,k: number):number[]{

        let resultado:number[] = [];
          for(let i = 0; i < n  ; i++){          
            resultado[i] = Math.floor(Math.random()*k)     

        }     return resultado

       }      

      }
  

   public print():void{
      console.log(this.elements);
         

   }

   public add(v1:Vector):Vector{
   
     for(let i = 0 ; i < this.elements.length ; i++){
       this.elements[i] = this.elements[i] + v1.elements[i]     
            
      }  
      return this 
 } 
 public subs(v1:Vector):Vector{
   
   for(let i = 0 ; i < this.elements.length ; i++){
     this.elements[i] = this.elements[i] - v1.elements[i]     
          
    }  
    return this 
} 

public mult(v1:Vector):Vector{
   
   for(let i = 0 ; i < this.elements.length ; i++){
     this.elements[i] = this.elements[i] * v1.elements[i]     
          
    }  
    return this 
} 
 
public multNumber(n:number):Vector{
   
   for(let i = 0 ; i < this.elements.length ; i++){
     this.elements[i] = this.elements[i] * n   
          
    }  
    return this 
} 

}