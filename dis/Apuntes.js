"use strict";
let mensaje = "Hola mundo";
mensaje = "Hola mundossssssss";
console.log(mensaje);
mensaje = "talue";
function validaEdad(edad) {
    if (edad < 17) {
        return console.log("puedeingresar");
    }
    return console.log("no puedes usar");
}
validaEdad(10);
const difficulty = null;
const user2 = {
    username: 'chanchito feliz',
    difficulty: difficulty ?? 1,
};
let UsuarioyAnimal = { id: 1, estado: 'no extinto', name: 'julian' };
function sumaDos(n) {
    if (typeof n === 'number') {
        return n + 2;
    }
    return parseInt(n) + 2;
}
let PersonayAnimales = { id: 1, estado: 'no extinto', name: 'julian' };
const Literalmente = 1;
function chencho(x) {
    if (typeof x === 'number') {
        return console.log("es un numero");
    }
    if (typeof x === 'string') {
        return console.log("es un string");
    }
}
function proceso(algo) {
    if (typeof algo === 'string') {
        algo.toString();
    }
}
class Personaje {
    id;
    name;
    nivel;
    _hp;
    profesion;
    constructor(id, name, nivel, hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = hp;
    }
    subirNivel() {
        return this.nivel++;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
}
const personaje = new Personaje(1, "Chanchito", 1, 100);
personaje.cambiarHP(-10);
console.log(personaje);
class Personaje2 {
    id;
    name;
    nivel;
    _hp;
    constructor(id, name, nivel, _hp) {
        this.id = id;
        this.name = name;
        this.nivel = nivel;
        this._hp = _hp;
    }
    subirNivel() {
        return this.nivel++;
    }
    cambiarHP(cantidad) {
        this._hp = this._hp + cantidad;
        return this._hp;
    }
    get hp() {
        return this._hp;
    }
    set hp(cantidad) {
        this._hp = this._hp + cantidad;
    }
}
class DatosBasicos {
    name;
    Desc;
    created_at;
    created_by;
    constructor(name, Desc, created_at, created_by) {
        this.name = name;
        this.Desc = Desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullyear() {
        return this.created_at.getFullYear();
    }
}
class product extends DatosBasicos {
}
class DatoBasico {
    name;
    Desc;
    created_at;
    created_by;
    constructor(name, Desc, created_at, created_by) {
        this.name = name;
        this.Desc = Desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullyear() {
        return this.created_at.getFullYear();
    }
}
class Pikso {
    name;
    Desc;
    created_at;
    created_by;
    constructor(name, Desc, created_at, created_by) {
        this.name = name;
        this.Desc = Desc;
        this.created_at = created_at;
        this.created_by = created_by;
    }
    get fullyear() {
        return this.created_at.getFullYear();
    }
}
class Caballo {
    name = "sardinilla";
    caminar() {
        console.log("caminando");
    }
    onomatopeya() {
        return "hi";
    }
}
function log(a, b) {
    console.log(a, b);
    return b;
}
log('dato', 42);
class Programador {
    computador;
    constructor(t) {
        this.computador = t;
    }
}
class User {
    id;
    constructor(id) {
        this.id = id;
    }
}
function print(t) {
    console.log(t);
    return t;
}
print({ id: "user_id" });
//# sourceMappingURL=Apuntes.js.map