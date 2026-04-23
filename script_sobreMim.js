const botaoEditar = document.getElementById('botaoEditar'); // selecionar o botão de editar
const botaoSalvar = document.getElementById('botaoSalvar'); // selecionar o botão de salvar
const conteudoEditavel = document.getElementById('conteudoEditavel'); // selecionar o conteúdo editável

botaoEditar.addEventListener('click', function() { // escutar clicks nos botoes de editar
    conteudoEditavel.setAttribute('contenteditable', 'true');
    conteudoEditavel.focus(); // colocar o cursor no conteúdo editável para facilitar a edição
});

botaoSalvar.addEventListener('click', function() { // escutar clicks nos botoes de salvar
    conteudoEditavel.setAttribute('contenteditable', 'false'); // desabilitar a edição do conteúdo
  salvarConteudo();
});

function salvarConteudo() {
    localStorage.setItem('conteudoSalvo', conteudoEditavel.innerHTML);    // salvar o conteúdo editável no localStorage
}

function carregarConteudo() {
    const conteudoSalvo = localStorage.getItem('conteudoSalvo'); // carregar o conteúdo salvo do localStorage
    if (conteudoSalvo) { // se houver conteúdo salvo, exibi-lo no campo editável
        conteudoEditavel.innerHTML = conteudoSalvo; // exibir o conteúdo salvo no campo editável
    }
}

carregarConteudo(); 