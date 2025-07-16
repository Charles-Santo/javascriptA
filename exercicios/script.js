function somar(){

    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    document.getElementById("resultado1").innerText = "Resultado: " + (n1 + n2);
}

function verificarIdade(){

    let idade = Number(document.getElementById("idade").value);

    if (idade >= 18) {
        
        document.getElementById("resultado2").innerText = "Maior de Idade";

    }else{

        document.getElementById("resultado2").innerText = "Menor de idade";

    }

}

function contarCaractere(){

    let texto1 = (document.getElementById("texto").value);

    document.getElementById("resultado3").innerText = "Seu texto tem: "+ texto1.length + " caracteres";

}

function verificarParImpar(){

    let num1 = Number(document.getElementById("numero1").value);

    if(num1 % 2 == 0){

        document.getElementById("resultado4").innerText = "Seu Número: "+ num1 + " é PAR";

    }else{

        document.getElementById("resultado4").innerText = "Seu Número: "+ num1 + " é IMPAR";

    }

}

function converterMaiusculo(){

    let texto1 = (document.getElementById("textoMaius").value);

    document.getElementById("resultado5").innerText = "Seu texto em maiusculo: " + texto1.toUpperCase();

}

function maiorMenor(){

    let n1 = Number(document.getElementById("numero1Maior").value);
    let n2 = Number(document.getElementById("numero2Maior").value);

    if (n1>n2) {

        document.getElementById("resultado6").innerText = "O Número "+ n1 + " é Maior que "+ n2;
        
    } else if (n2 > n1) {

        document.getElementById("resultado6").innerText = "O Número "+ n2 + " é Maior que "+ n1;

    }else{

        document.getElementById("resultado6").innerText = "O Número "+ n1 + " é Igual a "+ n2;

    }

}

function gerarTabuada(){

    let numero = Number(document.getElementById("numeroTabuada").value);
    var tabuada;    

    for (let indice = 1; indice <= 10; indice++) {

        if (indice == 1) {

            tabuada = (numero + " x " + indice + " = " + (numero * indice) + "\n")

        } else

             tabuada += (numero + " x " + indice + " = " + (numero * indice) + "\n");

        }
    

    document.getElementById("resultado7").innerText = tabuada;

}

function realizarContagem(){

    var contagem;

    for (let indice = 1; indice <= 10; indice++) {
      

        if (indice == 1) {

            contagem = indice + "\n";

        }else{

            contagem += indice + "\n";

    }
        
    }

    document.getElementById("resultado8").innerText = contagem;

}

function realizarMediaNotas(){

    let n1 = Number(document.getElementById("nota1").value);
    let n2 = Number(document.getElementById("nota2").value);
    let n3 = Number(document.getElementById("nota3").value);

    let media = (n1 + n2 + n3) / 3;

    if (media >= 6) {

        document.getElementById("resultado9").innerText = "APROVADO Nota : " + media;

    }else{

        document.getElementById("resultado9").innerText = "REPROVADO Nota : " + media.toFixed(2);

    }


}

function converterTemperatura(){

    let numeroCelsius = Number(document.getElementById("numeroTemperatura").value);

    let numeroF = (numeroCelsius * 9/5) + 32;

    document.getElementById("resultado10").innerText = numeroF + "°F";


}

function verificarDiaSemana(){

    let diaSemana = Number(document.getElementById("numeroDia").value);


}
