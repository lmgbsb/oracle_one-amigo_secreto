//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
nome = Document.getElementById('amigo').TextContent;

//Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
if (nome == "" || nome == null) {
    //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
    alert("Por favor, insira um nome.");

}else{
    //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
    amigos.push(nome);
    //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
    document.getElementById('amigo').value = "";
}




