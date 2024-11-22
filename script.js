//REST OPERATOR

// function listaAlunos(aluno1,aluno2, aluno3, aluno4){
//     console.log("Sejam bem vindos alunos!!");
//     console.log(aluno1);
//     console.log(aluno2);
//     console.log(aluno3);
//     console.log(aluno4);
// }


function listaAlunos(...alunos){
    console.log("Sejam bem vindos alunos!!");
    console.log(alunos);
}


listaAlunos('Adamastor', 'Benevides', 'Cremilda', 'Demerval');


//outro exemplo: sortear números em uma lista de números primos
function sorteadorNumeros (...numeros){
    console.log(numeros);
    const numeroSorteado = Math.floor(Math.random()*numeros.length);
    console.log(` A posição do número sorteado é ${numeroSorteado}`);
    console.log(` e o número primo é ${numeros[numeroSorteado]}`);
}

sorteadorNumeros(2,3,5,7,11,13,17,19)
