document.getElementById('data').innerHTML = new Date().toLocaleDateString('pt-BR');

const botaoAdicionar = document.getElementById('botaoAdicionar'); // selecionar o botão de adicionar


botaoAdicionar.addEventListener('click', function() { 
    const nomePagina = prompt('Qual o nome dapágina?'); // solicitar ao usuário o nome da nova página
    if (!nomePagina) { // se o usuário não fornecer um nome, exibir uma mensagem de erro e sair da função
        alert('Por favor, forneça um nome para a página.');
        return;
    }
    const novaPagina = {nome: nomePagina, conteudo: ''}; // criar um objeto para representar a nova página
    localStorage.setItem(nomePagina, JSON.stringify(novaPagina)); // salvar a nova página no localStorage
    alert('Página "' + nomePagina + '" criada com sucesso!'); // exibir uma mensagem de sucesso

    let paginas = JSON.parse(localStorage.getItem('listasPaginas')) || []; // carregar as páginas existentes do localStorage  
    paginas.push(nomePagina); // adicionar o nome da nova página à lista de páginas
    localStorage.setItem('listasPaginas', JSON.stringify(paginas)); // salvar a lista de páginas atualizada no localStorage 
    
   const newPage = document.getElementById('paginasDinamicas'); // selecionar o elemento onde as páginas são listadas
     const newLink = document.createElement('a'); // criar um novo elemento de link para a nova página
     newLink.href = 'pagina.html?nome=' + nomePagina; // definir o href do link para a nova página      
    newLink.textContent = nomePagina; // definir o texto do link para o nome da nova página
    newPage.appendChild(newLink); // adicionar o novo link à lista de páginas exibida na página
       
    
});

function carregarPagina() {
     let paginas = JSON.parse(localStorage.getItem('listasPaginas')) || []; // carregar as páginas existentes do localStorage
    for (let i = 0; i < paginas.length; i++) { 
        const newPage = document.getElementById('paginasDinamicas'); // selecionar o elemento onde as páginas são listadas
           const newLink = document.createElement('a'); // criar um novo elemento de link para a nova página
              newLink.href = 'pagina.html?nome=' + paginas[i]; // definir o href do link para a nova página
                newLink.textContent = paginas[i]; // definir o texto do link para o nome da nova página
                newPage.appendChild(newLink); // adicionar o novo link à lista de páginas exibida na página

        
    }
}
carregarPagina(); // carregar as páginas existentes no localStorage


const botaoRemover = document.getElementById('botaoRemover'); // selecionar o botão de remover

botaoRemover.addEventListener('click', function() {
    const nomePagina = prompt('Qual o nome da página que deseja remover?'); // solicitar ao usuário o nome da página a ser removida
    if (!nomePagina) { // se o usuário não fornecer um nome, exibir uma mensagem de erro e sair da função
        alert('Por favor, forneça um nome para a página.');
        return;
    }
    let paginas = JSON.parse(localStorage.getItem('listasPaginas')) || []; // carregar as páginas existentes do localStorage
    localStorage.removeItem(nomePagina); // remover a página do localStorage
    paginas = paginas.filter(p => p !== nomePagina); // remover o nome da página da lista de páginas 
    localStorage.setItem('listasPaginas', JSON.stringify(paginas)); // salvar a lista de páginas atualizada no localStorage
    document.getElementById('paginasDinamicas').innerHTML = ''; // limpar a lista de páginas exibida na página
    carregarPagina(); // recarregar a lista de páginas para refletir a remoção
    alert('Página "' + nomePagina + '" removida com sucesso!'); // exibir uma mensagem de sucesso
});