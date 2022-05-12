class Vector {
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
       
let vector1 = new Vector(5,100)
let v1 = new Vector(5,20)
let v2 = new Vector(5,30)


vector1.print()
// el elements se nos va modificando con cada llamada a método que hacemos sobre el objeto (no encuentro una manera distinta de hacerlo) asi que si llamamos a
//todos los métodos en sucesión el valor de elements se nos irá modificando en cada una y siendo el que se usa para las siguientes.
console.log(vector1.subs(v1))
console.log(vector1.mult(v1))
console.log(vector1.multNumber(2))