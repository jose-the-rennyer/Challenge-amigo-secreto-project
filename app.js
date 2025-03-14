//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigosAdicionados = [];
const lista = document.querySelector("#listaAmigos");
const listaSelecionado = document.querySelector("#resultado");

// Funções principais

function adicionarAmigo() {
    const inputAmigo = document.querySelector("#amigo");
    const amigo = inputAmigo.value;

    if(amigo.trim() !== "" && !amigosAdicionados.includes(amigo)) {
        limpaResultado();
        amigosAdicionados.push(amigo);
        lista.append(criarItemDaLista(amigo));

        inputAmigo.value = "";
    } else {
        if(amigosAdicionados.includes(amigo)) {
            alert(`Por favor, insira outro amigo, ${amigo} já consta na lista`);
        } else {
            alert("Por favor, insira um nome.");
        }
    }
}

function sortearAmigo() {
    if(amigosAdicionados.length > 0) {
        const qt = amigosAdicionados.length;
        const amigoAleatorio = amigosAdicionados[gerarNumeroAleatorio(qt)];

        reset();
        listaSelecionado.append(criarItemDaLista(`O amigo secreto sorteado é: ${amigoAleatorio}`))
    } else {
        alert("Você não tem amigos para sortear, por favor insira novos amigos.")
    }
}

// Funções auxiliadoras

function gerarNumeroAleatorio(number) {
    return parseInt(Math.random() * number);
}

function criarItemDaLista(content) {
    const li = document.createElement("li");
    li.innerHTML = content;

    return li;
}

function limpaResultado() {
    listaSelecionado.innerHTML = ""
}

function reset() {
    lista.innerHTML = "";
    amigosAdicionados = [];
}

// Bonus

window.addEventListener("keypress", (event) => {
    if(event.key === "Enter") {
        adicionarAmigo();
    }
});