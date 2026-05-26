cachorrobasico = document.getElementById("cachorrobasico");
cachorroduplo = document.getElementById("cachorroduplo");
xsalada = document.getElementById("xsalada");
refrigerante = document.getElementById("refrigerante");
refrigerante1 = document.getElementById("refrigerante1");


function calcularTotal() {

     if (isNaN(cachorrobasico.value) || isNaN(cachorroduplo.value) || isNaN(xsalada.value) 
    || isNaN(refrigerante.value) || isNaN(refrigerante1.value)) {
        alert("Por favor, insira numeros para todas as quantidades.");
        return;
    }

    if(cachorrobasico.value < 0 || cachorroduplo.value < 0 || xsalada.value < 0 || refrigerante.value < 0 || refrigerante1.value < 0) {
        alert("Por favor, insira valores positivos para todas as quantidades.");
        return;
    }


    var total = (cachorrobasico.value * 22) + (cachorroduplo.value * 26) + (xsalada.value * 29) + (refrigerante.value * 5) + (refrigerante1.value * 8);
    document.getElementById("total").innerHTML = "Total: R$ " + total.toFixed(2);
}   