const menorValor = 1
const maiorValor = 1000
const numeroSecreto = numeroAleatorio()

function numeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elmentoMaiorValor = document.getElementById('maior-valor')
elmentoMaiorValor.innerHTML = maiorValor

console.log(numeroSecreto)