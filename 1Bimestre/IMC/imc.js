function funcaoCalcular() {
    let p = parseFloat(document.getElementById("inputA").value);
    let a = parseFloat(document.getElementById("inputB").value);
    

    let imc = p / (a * a);

    let footer = document.getElementById("footer");
    let mensagem = document.getElementById("mensagem");

    if (imc < 18.5) {
        footer.classList.add("erro");
        mensagem.innerHTML = "abaixo do peso ";
        document.getElementById("resp1").innerHTML = imc.toFixed(2);

    } else if (imc >= 18.5 && imc < 24.9) {
        footer.classList.remove("erro");
        mensagem.innerHTML = "peso normal";
        document.getElementById("resp1").innerHTML = imc.toFixed(2);

    } else if (imc >= 25 && imc < 29.9) {
        footer.classList.add("erro");
        mensagem.innerHTML = "sobrepeso";
        document.getElementById("resp1").innerHTML = imc.toFixed(2);

    } else if (imc >= 30 && imc < 34.9) {
        footer.classList.add("erro");
        mensagem.innerHTML = "obesidade grau 1";
        document.getElementById("resp1").innerHTML = imc.toFixed(2);

    } else if (imc >= 35 && imc < 39.9) {
        footer.classList.add("erro");
        mensagem.innerHTML = "obesidade grau 2";
        document.getElementById("resp1").innerHTML = imc.toFixed(2);
       
    } else {
        footer.classList.add("erro");
        mensagem.innerHTML = "obesidade grau 3";
        document.getElementById("resp1").innerHTML = imc.toFixed(2);
    }
}