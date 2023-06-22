/*
function exemplo(a, b) {
    return a * b
}
exemplo.length
exemplo.constructor
const square = function (number) { return number * number }
let x = square(4)

console.log(x)
*/
/*
function soma(x, y = 10) {
    return x + y;
}
console.log(soma(5))
*/
/*
const a = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium'
]
const a2 = a.map(function (s) { return s.length })
console.log(a2)
const a3 = a.map(s => s.length)
console.log(a3)
function nome(a, b){
    return a + b
}
// (a, b) => {
//     return a + b
// }

let soma = (a, b) => a + b

console.log(soma(1,5))
*/
/*
let global = 100

function externa() {
    let ext = 10
    global++
    function interna() {
        let inter = 20
        console.log(`inter=${inter}, ext=${ext}, global=${global}`)
        ext++
        inter++
    }
    return interna
}
let x = externa()
let y = externa()

x()
x()
x()
y()
*/
/*
let pikachu = {
    nome: "Pikachu", 
    especie: "Picachu",
    nivel: 1,
    falar: function(){
        return `${this.nome} ${this.nome}`;
    }
}
let charmander = new Object();
charmander.nome = "Charmander";
charmander.falar = () => "Charmander";

console.log(pikachu.falar())
*/
/*
function pokemon(nome, especie, nivel = 1) {
    this.nome = nome;
    this.especie = especie;
    this.nivel = nivel;
    this.falar = () => `${this.nome} ${this.nome}`
}
let pikachu = new pokemon("pikachu", "pikachu");
let charmander = new pokemon("charmander", "charmander", 10)

console.log(pikachu.falar())
console.log(charmander)
*/
/*
class pokemon {
    constructor(nome, especie, nivel = 1) {
        this.nome = nome;
        this.especie = especie;
        this._nivel = nivel;
    }
    falar = () => `${this.nome} ${this.nome}`
    get nivel() {return this._nivel}
    set nivel(valor) {this._nivel = valor > 0 ? valor : 1}
}
let pikachu = new pokemon("pikachu", "pikachu", -1)
console.log(`${pikachu.falar()} ${pikachu._nivel}`)
*/