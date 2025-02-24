/*
  Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos
  que estão escondidos no HTML

     Passo 1 - pegar o botão Mostrar Mais no JS para poder verificar quando o usuário
     clicar em cima dele

     Passo 2 - identificar o clique do botão

     Passo 3 - adicionar a classe "ativo" nos projetos escondidos

  Objetivo 2 - esconder o botão de mostrar mais 
     
     Passo 1 - pegar o botão e esconder ele
*/

// Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML;

// Passo 1 - pegar o botão Mostrar Mais no JS para poder verificar quando o usuário clicar em cima dele;

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


// Passo 2 - identificar o clique do botão;

botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - adicionar a classe "ativo" nos projetos escondidos;
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');
    });

    // Objetivo 2 - esconder o botão de mostrar mais;
    // Passo 1 - pegar o botão e esconder ele
    botaoMostrarProjetos.classList.add("remover");
});

// Refatorando o código

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetosInativo => {
        projetosInativo.classList.add('ativo');

    });
}
