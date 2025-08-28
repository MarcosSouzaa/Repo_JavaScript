 // TRABALHANDO COM FUNÇÕES

 /*

 function somar (x1, x2) {

        return x1 + x2;
    }

    let resultado = somar(4,5);

    console.log(resultado);

*/

//*******************************************************************

// USANDO A FUNÇÃO EVAL PARA VALIDAR MINHA STRING  E OPERATOR

/*
function calc (x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`)//função nativa eval
}

let resultado = calc(6, 4, "*")

console.log(resultado);

*/

//**********************************************************************

// FUNÇÃO ANÔNIMA

/*
let resultado = (function (x1, x2, operator) {

    return eval(`${x1} ${operator} ${x2}`)//função nativa eval
})(6, 4, "*")

 console.log(resultado);

 */

 //***********************************************************************

 // ARROW FUNCTION

 /*

 let calc = (x1, x2, operator) => {

    return eval(`${x1} ${operator} ${x2}`)//função nativa eval
}

let resultado = calc(6, 6, "*")

console.log(resultado);

*/

//************************************************************************

//EXERCÍCIOS

/* FUNÇÃO COMUM

function somar (a, b, operator) {

    return eval(`${a} ${operator} ${b}`);
    }

let resultado = somar(10,3, "+");

console.log(resultado);

*/

//************************************************************************

/*ARROW FUNCTION 

let somar = (a, b, operator) => {

    return eval(`${a} ${operator} ${b}`);
}

let resultado = somar(10,4,"+");

console.log(resultado);

*/

//************************************************************************

let somar = (a, b, operator) => {

    return eval(`${a} ${operator} ${b}`);
}

console.log(somar(10,8,"+"));

//************************************************************************

