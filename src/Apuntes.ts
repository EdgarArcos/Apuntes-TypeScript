let mensaje: string = "Hola mundo"
mensaje = "Hola mundossssssss"

console.log(mensaje);

mensaje = "talue"

function validaEdad(edad: number) {
    if (edad < 17) {
        return console.log("puedeingresar");

    }
    return console.log("no puedes usar");

}

validaEdad(10)

//nullish coalescing operator 

const difficulty: number | null = null

const user2 = {
    username: 'chanchito feliz',
    difficulty: difficulty ?? 1,
}

//nullish coalescing son los dos interrogantes que estan en la parte superior esto es un operador que lo que hace es que si difficulty
//es 0 o string nos cuenta como 0 pero si es undefined o null nos cuenta como 1 en este caso difficulty es null osea nos contaria como 1

// Union type 

type Animal = {
    id: number,
    estado: string,
}

type Usuario = {
    id: number,
    name: string,
}

let UsuarioyAnimal: Usuario | Animal = { id: 1, estado: 'no extinto', name: 'julian' }

//como puedes ver arriba nosotros declaramos dos types o tipos y luego los unimos en una misma variable para pode llamar a las distintas
//propiedades de estos tipos o types en una funcion funciona de la siguiente forma 

function sumaDos(n: number | string): number {
    if (typeof n === 'number') {
        return n + 2
    }
    return parseInt(n) + 2

}


//IntersectionType 

type Animales = {
    id: number,
    estado: string,
}

type Persona = {
    id: number,
    name: string,
}

let PersonayAnimales: Persona & Animales = { id: 1, estado: 'no extinto', name: 'julian' }


//esto es practicamente lo mismo que uniontype pero con la diferencia que es obligatorio tener las propiedades de ambos tipos o types 

//Literal Types 

const Literalmente: 1 | 5 | 6 | 8 | 9 = 1

// los literal types es una forma de decir que una variable tiene que ser algo de forma obligatora de lo que tu pongas entre los dos puntos
// y el igual  

//type assertion 

// const input = document.getElementById('username') as HTMLInputElement

//lo de arriba esta comentado porque getElementById da problemas :(

//EL type assertion es para cuando recogemos un tipo de dato para que el compilador no tenga dificultades le decimos que tipo de dato es en
// este caso es un inputElement lo que recogemos mediante getelementbyid

//type narrowing 

function chencho(x: string | number) {
    if (typeof x === 'number') {
        return console.log("es un numero");
    }
    if (typeof x === 'string') {
        return console.log("es un string");
    }
}

//esto sirve para preguntar que tipo de dato es 

//type unknow 

function proceso(algo: unknown) {
    if (typeof algo === 'string') {
        algo.toString()
    }
}

//unknow nos ayuda a decir que algo puede ser cualquier cosa dentro de la funcion desde un string a un numero etc 

//TypeScript orientada a objetos
//La programacion orientada a objetos es un paradigma de la programacion pero en facil seria una forma de resolver un problema en el paradigma
//de la programacion orientada a objetos se trabajan con clases y con objetos las clases son el plano de una casa donde ponen las propiedades
// y los objetos son la casa ya construida (hablando tecnico los objetos son la representacion de los datos que guarda una clase)

//Ejemplo de clase 

class Personaje {
    readonly id: number //con readonly indicamos que esta propiedad es de solo lectura es decir no se puede modificar
    name: string
    nivel: number
    private _hp: number //con private lo que hacemos es privatizar esta propiedad para que solo pueda ser llamada dentro de esta clase 
    //es buena practica añadir un guion bajo antes del nombre de la propiedad para indicar que es privada
    profesion?: string //con el interrogante indicamos que una propiedad es completamente opcional 
    constructor(id: number, name: string, nivel: number, hp: number) {
        this.id = id
        this.name = name
        this.nivel = nivel
        this._hp = hp
    }

    subirNivel(): number {
        return this.nivel++
    }

    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }
}

const personaje = new Personaje(1, "Chanchito", 1, 100)
personaje.cambiarHP(-10)
console.log(personaje);

//Como podemos ver en el codigo superior creamos una clase escribiendo distintas propiedades y luego continuamos con un constructor
//el constructor es un metodo y lo tenemos que añadir siempre que creamos una instancia y es lo primero que se ejecuta siempre que
//ponemos new como pueden ver en la linea 142 nosotros le pasamos los parametros y el constructor inicializa las propiedades
// y le añade los valores que nosotros le pasemos
//tambien dentro de una clase podemos añadir funciones como es cambiarHP


//Como resumir las clases y sus propiedades 

class Personaje2 {
    constructor(
        public readonly id: number,
        public name: string,
        public nivel: number,
        private _hp: number,
    ) {
    }
    subirNivel(): number {
        return this.nivel++
    }

    cambiarHP(cantidad: number): number {
        this._hp = this._hp + cantidad
        return this._hp
    }
    //Geter sirve para coger el valor de una propiedad aunque sea privada
    get hp(): number {
        return this._hp
    }
    //Seter es para poder modificar el valor de una propiedad
    set hp(cantidad: number) {
        this._hp = this._hp + cantidad
    }
}

//Herencia 
//La herencia en typescript es una forma de ahorrarte la duplicidad del codigo y funciona de la siguiente forma 

class DatosBasicos {
    constructor(
        public name: string,
        public Desc: string,
        public created_at: Date,
        public created_by: number,
    ) { }
    get fullyear() {
        return this.created_at.getFullYear()
    }
}

class product extends DatosBasicos {

}

//Como podemos ver en el codigo superior nosotros podemos heredar propiedades y metodos de DatosBasicos usando la palabra reservada de extends y a continuacion el nombre de la clase
// en este caso product al heredar de DatosBasicos ya tiene la propiedad name , desc , created_At y created_by y su metodo fullyear

//Propiedades protected las propiedades protected son como las propiedades private pero en este caso las clases que hereden las propiedades protected si podran acceder y modificar 
//las propiedades en cuestion 

class DatoBasico {
    constructor(
        public name: string,
        public Desc: string,
        protected created_at: Date,
        protected created_by: number,
    ) { }
    get fullyear() {
        return this.created_at.getFullYear()
    }
}

//Abstract
//Propiedad Abstract para clases esta propiedad lo que hace es bloquear la posibilidad de generar nuevas instancias a partir de una clase  

abstract class Pikso {
    constructor(
        public name: string,
        public Desc: string,
        protected created_at: Date,
        protected created_by: number,
    ) { }
    get fullyear() {
        return this.created_at.getFullYear()
    }
}

// si ahora nosotros hacemos 
//let cuadro = new Pikso  ("Noche estrellada" , "Estrellas en la noche" , new Date(), 5)
//esto no funcionaria debido a que es una clase abstracta y esto no funcionaria y si no me crees descomentalo 

//Interface
//Las Interfaces es una forma de crear clases y esto se hace de la siguiente forma :

interface Animals {
    name: string
    caminar(): void //void se usa para cuando no hay datos en este caso lo ponemos porque caminar ejecuta una accion en este caso el sonido que hacen al caminar 
    onomatopeya(): string
}

class Caballo implements Animals {
    name: string = "sardinilla"
    caminar() {
        console.log("caminando");
    }
    onomatopeya(): string {
        return "hi"
    }
}

//como podemos ver tenemos que inicializar la interface escribiendo la palabra reservada interface antes del nombre y para usar la interface y que otra clase herede sus propiedades
//usamos la palabra reservada implements

//Genericos//
//Los genericos son una forma de ahorrarnos el repetir codigo ya que gracias a estos podemos hacer que una misma funcion acepte distintos tipos de datos (string, num , booleans)
//y funcionan de la siguiente forma 

function log<T, V>(a: T, b: V): V {
    console.log(a, b);

    return b
}

log<string, number>('dato', 42)
// log<string, string>('dato', "dato2")
// log<number, string>(42, "dato")
// log<number, number>(51, 42)

//como puedes ver cualquier tipo de dato funciona y todo con la misma funcion gracias a los genericos 
//Los genericos con clases funcionan practicamente igual 

class Programador<T>{
    computador: T;
    constructor(t: T) {
        this.computador = t
    }
}

//Genericos en interfaces :

interface KeyValue<T, V> {
    Key: T,
    Value: V
}

//Construints esto sirve para restringir el tipo de dato que puede recibir un generico y la forma util de usarlo es la siguiente :
class User {
    constructor(public id: string) { }
}

function print<T extends User>(t: T): T {
    console.log(t);

    return t
}
print({ id: "user_id" })
// print({ids:"user_id"})
//como podemos ver usando la palabra reservada de extends podemos indicarle que el tipo de dato generico lo debe de coger de User en este caso es un id y debe ser un string

//keyoff sirve para validar que una propiedad existe

// Si nosotros queremos importar una clase de otro archivo lo que debemos hacer es lo siguiente
//Archivouno.ts
// export class Point {
//constructor(public x: number, public y: number) {}
//}
//
//Archivodos.ts
//
//import { Point } from './Archivouno'
//
//const point = new Point(1,2)

//React & TypeScript 

//Pirmero de todo veremos como crear un proyecto con React y typescript a la vez 
//Debemos poner en consola el siguiente codigo:
//npx create-react-app -"nombredelproyecto-react --template typescript"

//Ahora para componetizar elementos "como por ejemplo botones formularios etc" en react con typescript se hace de la siguiente forma:\\

//Creamos el componente en la carpeta componentes

//import {MouseEventHandler , ReactNode} from "react"

//interface ButtonProps { //Importante aqui darse cuenta que el nombre de la interfaz es buena practica ponerle de nombre el nombre del componente seguido de "Props"\\
//children: reactNode,
//}

//export default function Button({ children }: ButtonProps ) {
//return(
//<button onClick={} className= "button color-red"> {children} </button>    
//) 
//}

//En el ejemplo anteriror estamos creando un componente boton que usa la propiedad children pero como typescript siempre nos pide una serie de requisitos para saber que informacion  
// manejamos pues necesitamos crear una interfaz para poder usar la propiedad children en esta funcion 

//useState\\

//type UserFormState = {
//name : string,
//lastname: string
//}

//const initialValue: UserFormState = {
//name: "",
//lastname: "",
//}

//export default function UserForm() {
//const [form, setForm] = useState(initialValue) "Ahora mismo initialValue es name y lastname con un string vacio"
//}

//Decoradores en TypeScript\\
//Los decoradores nos permiten alterar dinámicamente la funcionalidad o añadir nuevas responsabilidades a un objeto a nivel de clase, propiedad, 
//método o parámetro 
//Decoradores de clases\\

function Route(ruta: string) {
    return (constructor: Function) => {
        console.log('Ejecutando el decorador de ruta');
        constructor.prototype.route = ruta
    }
}

@Route('/productos')
class Productos {
    find() {
        return "producto"
    }
}