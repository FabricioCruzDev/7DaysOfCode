const tecnologias = []
alert('Olá!! Seja Bem Vindo!!!!')
let sel1 = prompt(
  'Qual área você deseja seguir? Digite 1 para Front-End ou 2 para Back-End'
)
if (sel1 === '1') {
  let selFront = prompt(
    'Qual você quer aprender? Digite 1 para React ou 2 para Vue'
  )
  if (selFront == '1') {
    let choose2 = 'React'
  }
  if (selFront == '2') {
    let choose2 = 'Vue'
  }
}

if (sel1 === '2') {
  let selBack = prompt(
    'Qual você quer aprender? Digite 1 para C# ou 2 para Java'
  )
  if (selBack == '1') {
    let choose2 = 'C#'
  }
  if (selBack == '2') {
    let choose2 = 'Java'
  }
}

let sel2 = prompt(
  'Se você deseja se especializar nesta tecnologia, digite 1. Caso queira se tornar um desenvolvedor Fullstack: Digite 2.'
)

if (sel2 === '1') {
  alert('Parabéns, você se tornará um especialista')
}
if (sel2 === '2') {
  alert('Parabéns, você se tornará um desenvolvedor Fullstack')
}
let sel3 = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')
if (sel3 === 'sim') {
  while (sel3 === 'sim') {
    tecnologias.push(
      prompt(
        'Qual outra tecnologia você gostaria de se especializar ou conhecer?'
      )
    )
    sel3 = prompt('Tem mais alguma tecnologia que você gostaria de aprender?')
    if (sel3 != 'sim') {
      alert('Você se interessou por: ' + tecnologias)
    }
  }
} else {
  alert('Muito obrigado! Fim do programa.')
}
