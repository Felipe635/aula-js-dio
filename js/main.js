


function clicou() {
    document.getElementById("Obrigado").innerHTML = "Obrigado por clicar";
}

function redirecionar () {
    window.open("link");
}

function passar(elemento) {
    // document.getElementById("mousemove").innerHTML = "Você passou o mouse";
    elemento.innerHTML = "Você passou o mouse";
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    // assim eu posso fazer isso em varios elementos diferentes e com diferentes ids
    elemento.innerHTML = "Passe o mouse aqui";
}

/*function clicou() {
    alert("Você clicou no botão");
}*/