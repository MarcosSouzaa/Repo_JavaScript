// MANIPULANDO O DOM

//FOCUS

window.addEventListener('focus', event => {

    console.log('focus');
})

//CLICK

document.addEventListener('click', event => {
    console.log('click');
})

//**************************************************************

// DATA FORMATO TIMESTAMP

let agora = Date.now();

console.log(agora); //1756386755662

// DATA FORMATO COM FUSO HORÁRIO (ESTANCIO A CLASSE)

let agora1 = new Date();

console.log(agora1);// Thu Aug 28 2025 10:23:56 GMT-0300 (Horário Padrão de Brasília)

// QUERO O DIA DESSA DATA
console.log(agora1.getDate());// 28

// QUERO O ANO DESSA DATA
console.log(agora1.getFullYear());//2025

// QUERO O MÊS DESSA DATA
console.log(agora1.getMonth());//7 "CUIDADO" Esse formato ele está pegando a partir do index 0, 
// O correto então seria mês 8.

// MOSTRAR A DATA DE ACORDO COM A LOCALIDADE
console.log(agora1.toLocaleDateString('pt-BR')) //28/08/2025

//***********************************************************************

// ARRAYS

let carros = ['Pálio 98', 'Toro', 'Uno', 'Gol', 10, true, new Date(), function(){}]

//Mostra a quantidade e todos os ítens
console.log(carros);

//PARA SABER A QUANTIDADE DE ÍTENS
console.log(carros.length);//8

//PARA SABER O QUE TEM EM CADA ÍNDICE
console.log(carros[1]);//toro

//PARA PEGAR A DATA
console.log(carros[6]);//Thu Aug 28 2025 12:06:03 GMT-0300 (Horário Padrão de Brasília)

//PARA PEGAR A DATA EM UM FORMATO ESPECÍFICO DENTRO DO ARRAY. ANO POR EXEMPLO:
console.log(carros[6].getFullYear());//2025

/* PERCORRER UM ARRAY USANDO A FUNÇÃO FOREACH USANDO UMA FUNÇÃO ANÔNIMA
 NOS ARGUMENTOS, VAMOS PASSAR O VALUE (O QUE TEM NAQUELA POSIÇÃO) E INDEX (QUAL POSIÇÃO)
 QUE O ÍTEM SE ENCONTRA */

 carros.forEach(function(value, index){

    //VAI MOSTRAR CADA ÍNDICE E VALOR
      console.log(index, value)
 })


