/*Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.
*/

alert(
  'Seja bem vindo..... Quero ver você adivinhar em qual número estou pensando'
)
const min = 0
const max = 10
rand = Math.floor(Math.random() * (max - min + 1) + min)
var chance = 3
var shoot = null
for (chance = 3; chance > 0; chance--) {
  shoot = prompt('Você tem ' + chance + ' tentativas. Dica: De zero a dez')
  if (shoot == rand) {
    alert('Parabéns você acertou')
    chance = 0
  } else {
    alert('RESPOSTA ERRADA!')
    if (chance == 1) {
      alert('Que pena, suas chances terminaram. O número era: ' + rand)
    }
  }
}
