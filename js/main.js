//criando array com todos os botoes de adicionar ou remover peças
const controles = document.querySelectorAll("[data-controle]");

//forEach vai percorrer cada elemento do meu array
controles.forEach( (elemento) =>{
    //em cada elemento do meu array eue stou adicionando um evento 'click'
    elemento.addEventListener("click", (evento)=>{
        //o evento 'click' vai chamar a funcao manipulaDados
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
    })
});

//funcao manipulaDados('qual a operação que vai fazer', 'qual bloco do meu doc HTML estou interagindo')
function manipulaDados(operador, qualPeca) {
    const peca = qualPeca.querySelector("[data-contador]");
    if (operador === "+" ) {
        peca.value = parseInt(peca.value) + 1;
    }
    else{
        peca.value = parseInt(peca.value) - 1;
    }
}
