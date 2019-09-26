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

//funciones

function add2(a:number,b:number) {
    return a+b ;
}

const sum = add2(2,5) 

function createAdder(a:number):(number)=>number {
    return function (b:number) {
        return b +a ;
    }
}

function fullname(firstname:string,lastName:string):string {
    return `${firstname} ${lastName}`
    
}

const javi1 =fullname("Javier", "Fuentes")

//parametro opcional
function fullname2(firstname:string,lastName?:string):string {
    return `${firstname} ${lastName}`
    
}

const javi =fullname2("Javier")

//parametro definido
function fullname3(firstname:string,lastName:string='Fuentes'):string {
    return `${firstname} ${lastName}`
    
}

const jsvi2 =fullname3("Javier")


interface Rectangulo{
    ancho:number,
    alto:number,
    color?:Color

}

let rect:Rectangulo={
    ancho:4,
    alto:6,
    color:Color.Rojo

}

function area(r:Rectangulo):number {
    return r.alto * r.ancho;
}

const areaRect =area(rect)
console.log(areaRect)

rect.toString = function () {
    return this.color ? `Un rectangulo ${this.color} ` : `Un rectangulo`;
}
console.log(rect.toString())