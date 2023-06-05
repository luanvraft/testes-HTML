const pedra = "Pedra";
const tesoura = "Tesoura";
const papel = "Papel";

// function escolhaRandomica() {
//     return [PEDRA, TESOURA, PAPEL][Math.floor(Math.random() * 3)];
// };


// const p1 = new Jogador("Bruno");
// const npc = new Jogador();

// npc.escolher = function () {
//     this.escolha = escolhaRandomica();
// };


// ((nome = "Chico") => console.log(`Seja bem vindo ${nome}. A partida vai começar`))(p1.nome);

// console.log("É sua vez. Digite:");
// console.log("P -> Pedra");
// console.log("T -> Tesoura");
// console.log("L -> Papel");

// function verificaEscolha(escolha) {
//     switch (escolha) {
//         case 'P':
//             return PEDRA;
//             case 'T':
//                 return TESOURA;
//                 case 'L':
//                     return PAPEL;
//                     default:
//                         return false;
//                     }
//                 }

// const deuEmpate = (escolhaJogador, escolhaNPC) => escolhaJogador == escolhaNPC;

// const venceu = function (escolhaJogador, escolhaNPC) {
//     if (
//         (escolhaJogador == PEDRA && escolhaNPC == TESOURA) ||
//         (escolhaJogador == TESOURA && escolhaNPC == PAPEL) ||
//         (escolhaJogador == PAPEL && escolhaNPC == PEDRA)
//     ) {
//         return true;
//     }
//     return false;
// }

// const imprimeResultado = (vitoriasJogador, vitoriasNPC) => {
//     if (vitoriasJogador > vitoriasNPC) {
//         console.log(`Parabéns vc venceu a melhor de 3, por ${vitoriasJogador} a ${vitoriasNPC}`);
//     } else {
//         console.log(`Infezlimente vc perdeu a melhor de 3, de ${vitoriasNPC} a ${vitoriasJogador}`);
//     }
// }

class Jogador {
    constructor(nome = "npc") {
        this.nome = nome;
        this.vitorias = 0;
        this._escolha = null;
    }
    get escolha() { return this._escolha };
    set escolha(valor) { this._escolha = [PEDRA, TESOURA, PAPEL].includes(valor) ? valor : PEDRA };
}

class Game {
    constructor() {
        this.p1Vitorias = 0;
        this.npcVitorias = 0;
        this.p1 = new Jogador("Bruno");
        this.npc = new Jogador();
    }
    iniciar() {

    }

    escolher(escolha) {
        this.p1.escolha = escolha;
    }

    npcEscolher() {
        this.npc.escolha = [pedra, tesoura, papel][Math.floor(Math.random() * 3)];
    }

    deuEmpate() {
        return this.p1.escolha === this.npc.escolha;
    }

    venceu() {
        if (
            (escolhaJogador == PEDRA && escolhaNPC == TESOURA) ||
            (escolhaJogador == TESOURA && escolhaNPC == PAPEL) ||
            (escolhaJogador == PAPEL && escolhaNPC == PEDRA)
        ) {
            this.p1Vitorias++;
            return true;
        }
        this.npcVitorias++;
        return false;
    }

    acabou() {
        return Math.max(this.p1Vitorias, this.npcVitorias) > 2
    }

    reiniciar() {
        this.npcVitorias = 0
        this.p1Vitorias = 0
    }
}

class UI {

    constructor(game) {
        this.divApresentacao = document.getElementById("apresentacao");
        this.btnComecar = document.getElementById("comecar");
        this.spanP1Score = document.getElementById("p1_score");
        this.spanNPCScore = document.getElementById("npc_score");
        this.divPlacar = document.getElementById("placar");
        this.imgP1 = document.getElementById("p1_escolha");
        this.imgNPC = document.getElementById("npc_escolha");
        this.divMensagem = document.getElementById("mensagem");
        this.btnPedra = document.getElementById("pedra");
        this.btnTesoura = document.getElementById("tesoura");
        this.btnPapel = document.getElementById("papel");
        this.game = game;

        this.btnComecar.addEventListener("click", () => this.comecar());

        this.btnPedra.addEventListener("click", () => this.escolher(pedra));
        this.btnTesoura.addEventListener("click", () => this.escolher(tesoura));
        this.btnPapel.addEventListener("click", () => this.escolher(papel));

        this.game.iniciar();

    }
    comecar() {
        this.divApresentacao.setAttribute("class", "invisible");
        this.reiniciarMensagem();
    }

    atualizarMensagem(mensagem, append = true) {
        if (append) {
            const novaLinha = document.createElement("br");
            this.divMensagem.appendChild(novaLinha);
            this.divMensagem.appendChild(document.createElement(mensagem));
        } else {
            this.divMensagem.textContent = mensagem;
        }
    }

    mostrarEscolha(opcao, player) {
        player.setAttribute("scr", `../img/${opcao}.png`);
        player.setAttribute("class", "visible");
    }

    esconderEscolha() {
        this.imgNPC.setAttribute("class", "invisible");
        this.imgP1.setAttribute("class", "invisible");
    }

    atualizarPlacar() {
        if (this.game.deuEmpate()) {
            this.divPlacar.setAttribute("class", "alert-secondary");
            this.atualizarMensagem("Que azar, deu empate!", false);
        } else if (this.game.venceu()) {
            this.divPlacar.setAttribute("class", "alert-success");
            let scoreAtual = parseInt(this.spanP1Score.textContent);
            scoreAtual++;
            this.spanP1Score.textContent = scoreAtual;
            this.atualizarMensagem("Parabéns você ganhou!", false);
        } else {
            this.divPlacar.setAttribute("class", "alert-danger");
            let scoreAtual = parseInt(this.spanNPCScore.textContent);
            scoreAtual++;
            this.spanNPCScore.textContent = scoreAtual;
            this.atualizarMensagem("Infelizmente você perdeu!", false);
        }
    }

}

do {
    p1.escolha = PEDRA;
    npc.escolher();

    if (deuEmpate(p1.escolha, npc.escolha)) {
        console.log(`Empate. Vc e o computdor escolheram ${p1.escolha}`);
    } else {
        const venci = venceu(p1.escolha, npc.escolha);
        const resultado = venci ? "venceu" : "perdeu";
        venci ? p1.vitorias++ : npc.vitorias++;
        console.log(`Vc ${resultado}. Vc escolheu ${p1.escolha} e o computador escolheu ${npc.escolha}.`);
    }
} while (Math.max(p1.vitorias, npc.vitorias) < 3);

imprimeResultado(p1.vitorias, npc.vitorias);
