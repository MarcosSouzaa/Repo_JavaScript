// UTILIZANDO A VARIÁVEL COM var

/*var olaMundo = 'Mandou bem!';

console.log(olaMundo); //Mandou bem!
console.log(olaMundo); //Mandou bem!
console.log(olaMundo); //Mandou bem!
console.log(olaMundo); //Mandou bem!
console.log(olaMundo); //Mandou bem!
*/

// OPERADOR DE COMPARAÇÃO ==

/*
let a = 10;
const b = 20;

console.log(a == b); //false
*/

// Um segundo exemplo:
/*let a = 10;
const b = '10';

console.log(a == b);
*/

// true (sabemos que isso não é verdade, um é número e o outro é string)
// Ele não considera o tipo, somente os valores. PROBLEMA!

// RESOLVENDO COM OPERADOR DE COMPARAÇÃO === (3 IGUAIS)

/*
let a = 10;
const b = '10';

console.log(a === b); //false (Sim é falso porque são diferentes)

console.log(a !== b) //true (Sim são diferentes valores e dados. Usa-se !== exclamação e dois iguais)

console.log(a != b) // false (Não, 10 não é diferente de 10Aqui ele só compara se o valor 10 é ígual à 10, desprezando o tipo)

console.log(a == b && typeof b == 'string')//true (a e b tem o valor de 10 mesmo b sendo string)

console.log(a == b && typeof a == 'string') //false( operador and_ o tipo de a é numérico)
console.log(a == b || typeof a == 'string') // true ( operador or_ a tem o mesmo valor de b, mas o tipo de a não é string)
                                            // mas nesse caso basta que uma condição seja verdadeira)

*/

//OPERADORES CONDICIONAIS

let cor = 'vermelho.';

if (cor === 'verde'){

    console.log("siga")
} else {
    console.log("pare")
}

// INCLUINDO MAIS OPÇÕES

let cor2 = 'azul';

if (cor2 === 'verde'){

    console.log('Siga');

} else if (cor2 === 'amarelo'){

    console.log('Atenção');   

} else if (cor2 === 'vermelho'){

    console.log('Pare')

} else {

    console.log('Opção incorreta!')
}