
// UTILIZANDO O SWITCH

let cor = 'amarelo';

switch (cor) {

    case 'verde':
        console.log('Siga');
        break;

    case 'amarelo':
        console.log('Atenção');
        break;

    case 'vermelho':
        console.log('Pare')
        break;

    default:
        console.log('Opção inválida!');
        

}

// UTILIZANDO O FOR

let n =  7;

for (let i = 0; i <= 10; i++){
    
    //template string
    console.log(`${i} X ${n} = ${i*n}`);  

    //Fazendo da forma antiga
    //console.log(i + " X " + n + " = " + (i*n));
}