AOS.init();

const dataDoEvento = new Date("Oct 15, 2026 00:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contaHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const tempoRestante = timeStampEvento - timeStampAtual;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("contador").innerHTML = `${dias}d - ${horas}h - ${minutos}m - ${segundos}s`;

    if (tempoRestante < 0) {
        clearInterval(contaHoras);
        document.getElementById("contador").innerHTML = "O evento já começou!";
    }
},1000);