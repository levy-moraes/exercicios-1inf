let cliente = "Renata Campos"
let opcaoMenu = 3
let quantidade = 2
let formaPagamento = "cartao"
let statusPedido = "enviado"

let prato

switch (opcaoMenu) {
    case 1:
        prato = "Sushi"
        break
    case 2:
        prato = "Temaki"
        break
    case 3:
        prato = "Yakisoba"
        break
    case 4:
        prato = "Chá Gelado"
        break
default:
    prato = "Opção inválida"
}


let precoUnitario

switch (opcaoMenu) {
    case 1:
        precoUnitario = 32
        break
    case 2:
        precoUnitario = 24
        break
    case 3:
        precoUnitario = 28
        break
    case 4:
        precoUnitario = 9
        break
default:
    precoUnitario = 0
}

let subtotal = precoUnitario * quantidade

let freteStatus = subtotal >=80 ? "Frete grátis" : "Frete pago"

let frete = subtotal >=80 ? 0 : 8


let pagamentoMensagem

switch (formaPagamento) {
    case "PIX":
        pagamentoMensagem = "Pagamento via PIX"
        break
    case "cartao":
    case "cartão":
        pagamentoMensagem = "Pagamento via cartão"
        break
    case "dinheiro":
        pagamentoMensagem = "Pagamento em dinheiro"
        break
default:
    pagamentoMensagem = "Forma de pagamento inválida"
}

let descontoPercentual

switch (formaPagamento) {
    case "cartao":
    case "cartão":
    case "dinheiro":
        descontoPercentual = 5
        break
    case "PIX":
        descontoPercentual = 0
        break
default:
    descontoPercentual = 0
}

let desconto = (subtotal * descontoPercentual) / 100

let total = subtotal - desconto + frete


let statusMensagem

switch (statusPedido) {
     case "pendente":
        statusMensagem = "Aguardando pagamento"
        break
    case "aprovado":
        statusMensagem = "Pedido em preparo"
        break
    case "enviado":
        statusMensagem = "Pedido a caminho"
        break
    case "cancelado":
        statusMensagem = "Pedido cancelado"
        break
default:
    statusMensagem = "Status descohecido"

}


const resumo = `
Cliente: ${cliente}
Item: ${prato}
Quantidade: ${quantidade}
Subtotal: ${subtotal}
Envio: ${freteStatus}
Pagamento: ${pagamentoMensagem}
Desconto: ${desconto}
Total: ${total}
Situação do pedido: ${statusMensagem}
`

console.log(resumo)



module.exports = {
    cliente,
    opcaoMenu,
    quantidade,
    formaPagamento,
    statusPedido,
    prato,
    precoUnitario,
    subtotal,
    freteStatus,
    frete,
    pagamentoMensagem,
    descontoPercentual,
    desconto,
    total,
    statusMensagem,
    resumo
}