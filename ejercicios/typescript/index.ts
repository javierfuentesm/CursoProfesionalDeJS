console.log("Hello Typescript");
function add(a:number,b:number) {
    return a + b;
    
}
console.log((add(2,3)));

let muted:boolean=true;
muted=false;

let numerador:number = 42;
let denominador:number=6;
let resultado=numerador/denominador;


let nombre :string ='Me llamo Javier';

let saludo= `Me llamo ${nombre}`

// arreglos
let people:string[] =[];
people=['Isabel','Nicole','Raul'];
people.push('9000')
//Arreglos diciendo de que tipo pueden ser 
let peopleandnumbers :Array  <string | number>=[]

//Enum

enum Color{
    Rojo='Rojo',
    Verde='Verde',
    Azul='Azul'
}

let colorfavorito:Color =Color.Rojo; 

console.log(`Mi color favorito es ${colorfavorito} `)

//Comodin 

let comodin :any= 'Joker'
comodin={type:'wildcard'}

//object
let someObject :object ={ type:'wildcaard'}