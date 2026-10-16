const prompt = require('prompt-sync')()

const nomeTurno = prompt('Nome do turno: ');
const meta = Number(prompt('Meta de produção: '));
const producaoInicial = Number(prompt('Produção inicial: '));
const pecasPorCaixa = Number(prompt('Quantidade de itens que cabem em uma caixa: '))

let producaoFinal = producaoInicial
while (producaoFinal < meta) {
    producaoFinal++
}

let caixasNecessarias = 0
let itensRestantes = producaoFinal

do {
    caixasNecessarias++
    itensRestantes -= pecasPorCaixa
} while (itensRestantes > 0)


const situacaoMeta = producaoFinal >= meta ? "Meta atingida" : "Meta não atingida"

const resumo = `
Turno: ${nomeTurno}
Produção Final: ${producaoFinal} unidades
Caixas Necessárias: ${caixasNecessarias}
Situação: ${situacaoMeta}
`

console.log(resumo)

module.exports = {
    nomeTurno,
    meta,
    producaoInicial,
    pecasPorCaixa,
    producaoFinal,
    caixasNecessarias,
    situacaoMeta,
    resumo
}
