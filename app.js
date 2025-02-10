//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];




function adicionarAmigo(){

    //Capturar o valor do campo de entrada: Utilize document.getElementById ou document.querySelector para obter o texto inserido pelo usuário.
    let nome = document.getElementById('amigo').value;

    console.log("Nome digitado: " + nome);

    //Validar a entrada: Implemente uma validação para garantir que o campo não esteja vazio.
    if (nome == "" || nome == null) {
        //Se estiver vazio, exiba um alerta com a mensagem de erro: "Por favor, insira um nome."
        alert("Por favor, insira um nome.");
        console.log("Não informou nome!");
    }else{
        //Atualizar o array de amigos: Se o valor for válido, adicione-o ao array que armazena os nomes dos amigos usando o método .push().
        amigos.push(nome);
        //Limpar o campo de entrada: Após adicionar o nome, redefina o campo de texto para uma string vazia.
        alert(nome + " adicionado com sucesso! " + "\n" + ":)");
        console.log(amigos);
    }
    document.getElementById('amigo').value = "";
}



