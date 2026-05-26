// Pontuação inicial
let pontosTime1 = 0;
let pontosTime2 = 0;

// Adiciona ponto
function adicionarPonto(time) {
    if (time === 'time1') {
        pontosTime1++; // soma ponto time 1
        atualizarPlacar('time1');
    } else if (time === 'time2') {
        pontosTime2++; // soma ponto time 2
        atualizarPlacar('time2');
    }
}

// Remove ponto
function removerPonto(time) {
    // impede valores negativos
    if (time === 'time1' && pontosTime1 > 0) {
        pontosTime1--;
        atualizarPlacar('time1');
    } else if (time === 'time2' && pontosTime2 > 0) {
        pontosTime2--;
        atualizarPlacar('time2');
    }
}

// Atualiza o HTML
function atualizarPlacar(time) {
    if (time === 'time1') {
        document.getElementById('pontosTime1').textContent = pontosTime1;
    } else if (time === 'time2') {
        document.getElementById('pontosTime2').textContent = pontosTime2;
    }
}

// Reset geral
function resetarPlacar() {
    pontosTime1 = 0;
    pontosTime2 = 0;

    atualizarPlacar('time1');
    atualizarPlacar('time2');
}