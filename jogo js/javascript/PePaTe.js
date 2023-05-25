const pedra = "pedra";
const papel = "papel";
const tesoura = "tesoura";

function escolhaRandomica() {
    return [pedra, papel, tesoura][Math.floor(Math.random() * 3)];
}

class Jogador {
    constructor(nome = "npc") {
        this.nome = nome;
        this.vitorias = 0;
        this._escolha = null;
    }
    get escolha() { return this._escolha };
    set escolha(valor) { this._escolha = [pedra, papel, tesoura].includes(valor) ? valor : pedra };
}

const p1 = new Jogador("Bruno");
const npc = new Jogador();

npc.escolher = function () {
    this.escolha = escolhaRandomica();
};

((nome = "Chico") => console.log(`Seja bem vindo ${nome}. A partida vai começar`))(p1.nome);

console.log("É sua vez. Digite: ");
console.log("P -> Pedra");
console.log("T -> Tesoura");
console.log("L -> Papel");

function verificarEscolha(escolha) {
    switch (escolha) {
        case 'P':
            return pedra;
        case 'T':
            return tesoura;
        case 'L':
            return papel;
        default:
            return false;
    }
}

const deuEmpate = (escolhaJogador, escolhaNPC) => escolhaJogador == escolhaNPC;

const venceu = function (escolhaJogador, escolhaNPC) {
    if (
        (escolhaJogador == pedra && escolhaNPC == tesoura) ||
        (escolhaJogador == tesoura && escolhaNPC == papel) ||
        (escolhaJogador == papel && escolhaNPC == pedra)
    ) {
        return true;
    }    
    return false;
}

const imprimirResultado = (vitoriasJogador, vitoriasNPC) => {
    if (vitoriasJogador > vitoriasNPC) {
        console.log(`Parabéns você venceu a melhor de 5, por ${vitoriasJogador} a ${vitoriasNPC}`);        
    } else {
        console.log(`Infelizmente você perdeu a melhor de 5, de ${vitoriasJogador} a ${vitoriasNPC}`);
    }
}

do {
    p1.escolha = pedra;
    npc.escolher();

    if (deuEmpate(p1.escolha, npc.escolha)) {
        console.log(`Empate. Você e o computador escolheram ${p1.escolha}`);
    } else {
        const venci = venceu(p1.escolha, npc.escolha);
        const resultado = venci ? "venceu" : "perdeu";
        venci ? p1.vitorias++ : npc.vitorias++;
        console.log(`Você ${resultado}. Você escolheu ${p1.escolha} e o computador escolheu ${npc.escolha}`);
    }
}while (Math.max(p1.vitorias, npc.vitorias) < 3);

imprimirResultado(p1.vitorias, npc.vitorias);