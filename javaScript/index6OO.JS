//ORIENTAÇÃO A OBJETOS

// utilizando a forma antiga

let celular = function() {
    
    // substituiu let por this. Agora eu tenho u objeto this
    // e estou acessando através do ponto "." tudo que estiver
    // detro do bobjeto, que pode ser string, método, função etc.
    //let cor = 'prata';

    this.cor = 'prata';

    // POSSO CRIAR UMA FUNÇÃO AQUI DENTRO DA FUNÇÃO
    // mas não conseguirei acessar de fora
    // terei que promover a MÉTODO que terá o nome de ligar, que será uma função
    // function ligar(){ }

    this.ligar = function() {     

        console.log('uma ligação!')
          return 'Ligando!';
    }    
}
    // O new coloca o construtor da classe intrísseco
    let objeto = new celular();
   
    console.log(objeto); //celular {cor: 'prata'}

    // SE EU QUISER SABER SÓ A COR
    console.log(objeto.cor) //prata

    // INVOCAR O MÉTODO LIGAR
    console.log(objeto.ligar());//uma ligação!
