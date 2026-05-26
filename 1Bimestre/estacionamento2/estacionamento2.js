function funcaoCalcular(){

    let entrada = document.getElementById("entrada").value;
    let saidaData = document.getElementById("saidaData").value;

    let carro = document.getElementById("inputc").checked;
    let cliente = document.getElementById("inputcli").checked;

    if (!entrada || !saidaData) {
        document.getElementById("mensagem").innerText = "Preencha as datas!";
        return;
    }

    let dataEntrada = new Date(entrada);
    let dataSaida = new Date(saidaData);

    let diferencaMs = dataSaida - dataEntrada;

    if (diferencaMs <= 0) {
        document.getElementById("mensagem").innerText = "Saída inválida!";
        return;
    }


    let horas = diferencaMs / (1000 * 60 * 60);

    
    horas = Math.ceil(horas);

    let dias = Math.floor(horas / 24);
    let resto = horas % 24;
    let valor = 0;

   
    if (horas >= 24) {
        valor = dias * 60; // diária
        valor = valor + (resto * 2.5); // horas extras
    } else {
        if (horas > 0) {
            valor = 5; // primeira hora

            if (horas > 1) {
                valor = valor + ((horas - 1) * 2.5);
            }
        }
    }

   
    if (carro) {
        valor = valor + (valor * 0.25);
    }

    
    if (cliente) {
        valor = valor - (valor * 0.05);
    }

    document.getElementById("saida").innerText =
        "Tempo: " + horas + "h | Valor: R$ " + valor.toFixed(2);
}