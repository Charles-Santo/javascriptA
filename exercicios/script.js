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

    let texto1 = Number(document.getElementById("texto").value);

    document.getElementById("resultado3").innerText = "Seu texto tem: "+ texto1.length + "caracteres";

}