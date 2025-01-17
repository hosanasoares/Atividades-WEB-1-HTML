//Crie um código em js de um relatório de uma compra a partir de um valor e do produto comprado.
//  Aplique um desconto qualquer

var produto = "Ar Condicionado";
var preco = 5000;
var quantidade = 2;
var desconto = 20;

let precoTotal = preco * quantidade;
let descontoCalculado = (desconto/100) * precoTotal;
let precoFinal = precoTotal - descontoCalculado;

console.log("Desconto calculado: R$" + descontoCalculado);
console.log(`Preço total: R$${precoFinal}`);
