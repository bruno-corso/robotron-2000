const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

//forEach vai percorrer cada elemento do meu array
controle.forEach( (elemento) =>{
    //em cada elemento do meu array eue stou adicionando um evento 'click'
    elemento.addEventListener("click", (evento)=>{
        //o evento 'click' vai chamar a funcao manipulaDados
        manipulaDados(evento.target.textContent);
        console.log("click");
    })
});

//funcao que adiciona se for '+' e subtrai se for '-'
function manipulaDados(operador) {
    if (operador === "+" ) {
        braco.value = parseInt(braco.value) + 1;
    }
    else{
        braco.value = parseInt(braco.value) - 1;
    }
}
