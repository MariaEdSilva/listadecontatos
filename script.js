
//Lista para armazenar contatos
let contatos=[];

//Função para adicionar um contato
function adicionarContato(nome, telefone){
    contatos.push({nome, telefone});
    atualizarTela();
}

//Função para remover um contato
function removerContato(index){
    contatos.splice(index, 1)
    atualizarTela();
}

//Função para editar um contato
function editarContato(index){
    let novoNome=prompt("Digite o novo nome: ", contatos[index].nome);
    let novoTelefone=prompt("Digite o novo telefone: ", contatos[index].telefone);

    if (novoNome && novoTelefone){
        contatos[index]={nome:novoNome,telefone:novoTelefone};
        atualizarTela();
    }
}

//Função para atualizar a exibição da tela
function atualizarTela(){
    let saida="<h1>Lista de Contatos</h1>";

    if (contatos.length===0){
        saida += "<p>Nenhum contato cadastrado.</p>";
    }
    else{
        saida += "<ul>";
        contatos.forEach((contato, index)=>{
            saida += `<li>${contato.nome} - ${contato.telefone}
                        <button onclick="editarContato(${index})">Editar</button>
                        <button onclick="removerContato(${index})">Remover</button>
                        </li>`;

        });
        saida += "</ul>";
    }
    //Adiciona botão para cadastrar novo contato
    saida += `<button onclick="novoContato()">Adicionar Contato</button>`;
}