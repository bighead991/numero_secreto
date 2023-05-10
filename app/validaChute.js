function verificaChute(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (numeroMaior(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido: Fale um numero entre ${menorValor} e ${maiorValor}</div>`
        return
    }


    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou Miseravi!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn-jogar">Reiniciar partida</button>
        `
    } else if (numero < numeroSecreto) {
        elementoChute.innerHTML += '<div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>'
    }else {
        elementoChute.innerHTML += '<div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>'
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaior(numero) {
    return numero > maiorValor || numero < menorValor
}

//ATUALIZANDO PAGINA AO CLICAR NO BOTÃO
document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})