const caixaPrincipal = document.querySelector(".principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        alternativas: [
            {
                texto: "É VESTIBULANDO?",
            },
            {
                texto: "NÃO SABE O QUE É VESTIBULAR?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "QUER PRESTAR QUAL CURSO?",
            },
            {
                texto: "QUER FAZER FACULDADE?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "FAZ CURSINHO OU NÃO?",
            },
            {
                texto: "QUER UNIVERSIDADE PÚBLICA OU PARTICULAR?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "JÁ PENSOU EM ESTUDAR EM GRUPO?",
            },
            {
                texto: "CONHECE OUTROS VESTIBULANDOS?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "VOCE PODE IR A UMA BIBLIOTECA."
            },
            {texto: "FAÇA PROVAS DE SIMULADO.",
            }
                
            
        ]
    },
    {
        alternativas: [
            {
                texto: "QUAL A NOTA DE CORTE?",
            },
            {
                texto: "QUANTAS VAGAS TEM SEU CURSO?",
            }
        ]
    },
    {
        alternativas: [
            {
                texto: "PESQUISE OS DADOS NO SITE DA UNIVERSIDADE.",
            },
            {
                texto: "CONVERSE COM QUEM JÁ PASSOU.",
            }
        ]
    },

];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraAlternativas(){
    perguntaAtual = perguntas[atual];
    caixaAlternativas.textContent = "";

    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    atual++;
    mostraAlternativas();
}


mostraAlternativas();