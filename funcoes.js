function dobrar (num){
    valor = num * 2;
    return num;
}

var valor = 10
console.log(dobrar(valor));
console.log(valor) // 10

//Função que retorna um texto//

function saudacao (nome = "visitante"){
    return 'Olá, ${nome}!';
}

    console.log(saudacao("joão")); // Olá, João!

//

function saudacao(nome = "visitante"){
console.log('Ola, ${nome}!');
}
saudacao (); // Olá, Visitante!
saudacao("João"); // Olá, João!

//Passagem de referência//

function adicionaritem(lista) {
    lista.push("Novo item");
}
let itens = ["item 1", "item 1"];
adicionaritem(itens);
console.log(itens); // ["item 1", "item 2", "Novo item"]