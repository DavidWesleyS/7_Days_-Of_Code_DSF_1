var nome = prompt('Qual o seu nome?')
var idade = prompt('Quantos anos você tem?')
var linguagem = prompt('Qual linguagem de programação você está estudando?')
window.alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}.`)     

var duvida = parseInt(prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO."));

if(duvida == 1) {
    mostra("Muito bom! Continue estudando e você terá muito sucesso.");
}

if(duvida == 2) {
    mostra("Ahh que pena... Já tentou aprender outras linguagens?");
}