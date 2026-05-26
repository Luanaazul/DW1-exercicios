aluno = document.getElementById("nome");
ra = document.getElementById("ra");



nota1 = document.getElementById("nota1");
nota2 = document.getElementById("nota2");
nota3 = document.getElementById("nota3");
nota4 = document.getElementById("nota4");
mediaexercicios = document.getElementById("mediaexercicios");
MA = 0;

function calcular() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var mediaexercicios = parseFloat(document.getElementById("mediaexercicios").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) || isNaN(mediaexercicios.valueOf())) {
        alert("Por favor, insira valores numéricos válidos para todas as notas e a média dos exercícios.");
        return;
    }

    if (nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 || nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10 || mediaexercicios < 0 || mediaexercicios > 10) {
        alert("Por favor, insira valores entre 0 e 10 para todas as notas e a média dos exercícios.");
        return;
    }
    MA = (nota1 + nota2 * 2 + nota3 * 3 + nota4 * 4 + mediaexercicios)/11
    MA = MA.toFixed(2)


    if(MA >= 9){
        conceito="A"
    } else if (MA >= 7.5 && MA < 9) {
        conceito="B"
    } else if (MA >= 6 && MA < 7.5) {
        conceito="C"
    }   else if (MA>= 4 && MA < 6) {
        conceito="D"
    } else if (MA < 4) {
        conceito="E"
    }

    if (conceito == "A" || conceito == "B" || conceito == "C") {
        situacao = "Aprovado"
    } else if (conceito == "D" || conceito == "E") {
        situacao = "Reprovado"
}      

   document.getElementById("resultado").innerHTML = "Aluno: " + aluno.value + "<br>" +
    "RA: " + ra.value + "<br>" + 
    "bimestre 1: " + nota1 + "<br>" +
    "bimestre 2: " + nota2 + "<br>" +
    "bimestre 3: " + nota3 + "<br>" +
    "bimestre 4: " + nota4 + "<br>" +
    "Média dos Exercícios: " + mediaexercicios + "<br>" + 
    "Média Final: " + MA + "<br>" +
    "Conceito: " + conceito + "<br>" +
    "Situação: " + situacao;
}