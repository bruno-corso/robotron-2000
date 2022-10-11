const braco = document.querySelector("#braco");

const controle = document.querySelectorAll(".controle-ajuste");

controle.forEach( (elemento) =>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.textContent);
        console.log("click");
    })
});

function manipulaDados(operador) {
    if (operador === "+" ) {
        braco.value = parseInt(braco.value) + 1;
    }
    else{
        braco.value = parseInt(braco.value) - 1;
    }
}