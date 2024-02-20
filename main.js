const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "var x;",
        "let x;",
        "const x;",
      ],
      correta: 2 // A resposta correta é a opção C (const x;)
    },
    {
      pergunta: "Qual dessas opções é usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "console.print()",
        "console.log()",
      ],
      correta: 2 // A resposta correta é a opção C (console.log();)
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "=>",
      ],
      correta: 1 // A resposta correta é a opção B (===)
    },
    {
      pergunta: "Qual método de array é usado para adicionar elementos ao final de um array?",
      respostas: [
        "push()",
        "pop()",
        "shift()",
      ],
      correta: 0 // A resposta correta é a opção A (push())
    },
    {
      pergunta: "Qual é a forma correta de escrever um comentário de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário de uma linha",
        "<!-- Este é um comentário de uma linha -->",
        "/* Este é um comentário de uma linha */",
      ],
      correta: 0 // A resposta correta é a opção A (// Este é um comentário de uma linha)
    },
    {
      pergunta: "Qual é a função usada para converter uma string em um número em JavaScript?",
      respostas: [
        "toInt()",
        "parseString()",
        "parseInt()",
      ],
      correta: 2 // A resposta correta é a opção C (parseInt())
    },
    {
      pergunta: "Qual é o resultado da expressão 5 + '5' em JavaScript?",
      respostas: [
        "10",
        "55",
        "Error",
      ],
      correta: 1 // A resposta correta é a opção B (55)
    },
    {
      pergunta: "Qual é o operador lógico 'ou' em JavaScript?",
      respostas: [
        "||",
        "&&",
        "!",
      ],
      correta: 0 // A resposta correta é a opção A (||)
    },
    {
      pergunta: "Qual desses é um tipo de dado em JavaScript?",
      respostas: [
        "string",
        "array",
        "tudo acima",
      ],
      correta: 2 // A resposta correta é a opção C (tudo acima)
    },
    {
      pergunta: "Qual é o método usado para remover o último elemento de um array em JavaScript?",
      respostas: [
        "remove()",
        "pop()",
        "delete()",
      ],
      correta: 1 // A resposta correta é a opção B (pop())
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDeperguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDeperguntas
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'perguntas-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
  
      if(corretas.size === 10){
        alert('Parabens você possui um otimo conhecimento de JavaScript')
      }
  
      mostrarTotal.textContent = corretas.size + 'de' + totalDeperguntas
  
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  
  quizItem.querySelector('dl dt').remove()
  
  
    quiz.appendChild(quizItem)
  }