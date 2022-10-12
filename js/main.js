//regras de estatistica para calculo
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

//criando array com todos os botoes de adicionar ou remover peças
const controles = document.querySelectorAll("[data-controle]");
//criando array com todos as estatisticas
const estatisticas = document.querySelectorAll("[data-estatistica");

//forEach vai percorrer cada elemento do meu array
controles.forEach( (elemento) =>{
    //em cada elemento do meu array eue stou adicionando um evento 'click'
    elemento.addEventListener("click", (evento)=>{
        //o evento 'click' vai chamar a funcao manipulaDados
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        ajustaEstatistica(evento.target.dataset.controle, evento.target.dataset.peca);
    })
});

//funcao manipulaDados('qual a operação que vai fazer', 'qual bloco do meu doc HTML estou interagindo')
function manipulaDados(operador, qualPeca) {
    const peca = qualPeca.querySelector("[data-contador]");
    if (operador === "+" ) {
        // somar 1 no contator
        peca.value = parseInt(peca.value) + 1;
    }
    else{
        // subtrair 1 no contator
        peca.value = parseInt(peca.value) - 1;
    }
}

//funcao ajustaEstatistica('qual a operação que vai fazer', 'qual bloco do meu doc HTML estou interagindo')
function ajustaEstatistica(operador, qualPeca) {
    if (operador === "+" ) {
        //percorrer cada elemento do array 'estatisticas'
        estatisticas.forEach( (elemento) => {
            //pegar o atual valor da estatistica e somar o impacto de cada tipo de peca declarado dentro do array 'pecas' 
            elemento.textContent = parseInt(elemento.textContent) + pecas[qualPeca][elemento.dataset.estatistica];
        })
    }
    else{
            //pegar o atual valor da estatistica e subtrair o impacto de cada tipo de peca declarado dentro do array 'pecas'
        estatisticas.forEach( (elemento) => {
            elemento.textContent = parseInt(elemento.textContent) - pecas[qualPeca][elemento.dataset.estatistica];
        })
    }
}
