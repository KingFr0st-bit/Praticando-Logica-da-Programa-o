let amigo = [];

function adicionar() {
    let amigos = document.getElementById("nome-amigo");
    if (amigos.value == "") {
        alert("Informe o nome do amigo.");
        return;
    }
    if (amigo.includes(amigos.value)) { // Corrigido para usar o array amigo
        alert("Nome já adicionado");
        return;
    }

    let listaAmigos = document.getElementById("lista-amigos");
    amigo.push(amigos.value); // Adicionando o nome ao array amigo
    if (listaAmigos.textContent == "") {
        listaAmigos.textContent = amigos.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ' ,' + amigos.value;
    }   
    amigos.value = "";
}

function sortear () {
    if (amigo.length < 4) {
        alert ("Adicione pelo menos 4 amigos");
        return;
    }

    embaralha(amigo);
    let sorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigo.length; i++) {

        if (i == amigo.length -1 ) {
             sorteio.innerHTML = sorteio.innerHTML + amigo[i] + `-->` + amigo[0] + `<br>`
        } else {
             sorteio.innerHTML = sorteio.innerHTML + amigo[i] + `-->` + amigo[i + 1] + `<br>`
        }
    }

}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar () {
    amigo = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}