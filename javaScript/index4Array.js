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

