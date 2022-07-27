alert('Seja bem vindo!!!!')
let name = prompt('Qual o seu nome?')
let age = prompt('Quantos anos você tem?')
let language = prompt('Qual linguagem de programação você está estudando?')

alert(
  'Olá ' +
    name +
    ', você tem ' +
    age +
    ' anos e já está aprendendo ' +
    language +
    '!'
)

let like = prompt(
  'Você gosta de estudar ' + language + '? Responda 1 para Sim ou 2 para Não'
)

if (like == 1) alert('Muito bom! Continue estudando e você terá muito sucesso.')
else alert('Ahh que pena... Já tentou aprender outras linguagens?')
