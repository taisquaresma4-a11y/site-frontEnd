const urlParams = new URLSearchParams(window.location.search); // criar um objeto URLSearchParams para acessar os parâmetros da URL 
const nomePagina = urlParams.get('nome'); // obter o valor do parâmetro "nome" da URL
document.querySelector('h1').textContent = nomePagina; // definir o texto do título da página para o nome obtido da URL





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
     const dadosParaSalvar = {
        nome: nomePagina,
        conteudo: conteudoEditavel.innerHTML
    };  
    localStorage.setItem(nomePagina, JSON.stringify(dadosParaSalvar)); // salvar o conteúdo editável no localStorage associado ao nome da página
}

function carregarConteudo() {
    const conteudoSalvo = localStorage.getItem(nomePagina); // carregar o conteúdo salvo do localStorage
    if (conteudoSalvo) { // se houver conteúdo salvo, exibi-lo no campo editável
        try {
        const dados = JSON.parse(conteudoSalvo);
        conteudoEditavel.innerHTML = dados.conteudo; // exibir o conteúdo salvo no campo editável
        } catch (error) {
            conteudoEditavel.innerHTML = conteudoSalvo; // se o conteúdo salvo não for um JSON válido, exibi-lo diretamente no campo editável   
        }
    }
}

carregarConteudo(); 


