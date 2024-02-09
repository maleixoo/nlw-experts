const perguntas = [
    {
        pergunta: 'Qual palavra-chave é usada para declarar uma variável em JavaScript?',
        respostas: ['var', 'let', 'const'],
        correta: 2 // 'const'
    },
    {
        pergunta: 'Qual é o operador de comparação para verificar se dois valores são iguais em valor e tipo?',
        respostas: ['==', '===', '!='],
        correta: 1 // '==='
    },
    {
        pergunta: 'Qual método é usado para adicionar um novo elemento ao final de um array?',
        respostas: ['push()', 'unshift()', 'concat()'],
        correta: 0 // 'push()'
    },
    {
        pergunta: 'Qual função é usada para converter uma string em um número inteiro?',
        respostas: ['parseInt()', 'parseFloat()', 'toFixed()'],
        correta: 0 // 'parseInt()'
    },
    {
        pergunta: 'Qual dos seguintes métodos é usado para remover o último elemento de um array?',
        respostas: ['pop()', 'shift()', 'splice()'],
        correta: 0 // 'pop()'
    },
    {
        pergunta: 'Qual é a saída do código: console.log(typeof undefined);?',
        respostas: ['"undefined"', '"null"', '"object"'],
        correta: 2 // '"undefined"'
    },
    {
        pergunta: 'Qual é o resultado da expressão: 5 + "5"?',
        respostas: ['10', '"55"', 'TypeError'],
        correta: 1 // '"55"'
    },
    {
        pergunta: 'Qual método é usado para encontrar o índice de um elemento em um array?',
        respostas: ['indexOf()', 'findIndex()', 'search()'],
        correta: 0 // 'indexOf()'
    },
    {
        pergunta: 'Qual dos seguintes é um exemplo de um loop em JavaScript?',
        respostas: ['if-else', 'for', 'switch'],
        correta: 1 // 'for'
    },
    {
        pergunta: 'Qual função é usada para converter um número em uma string?',
        respostas: ['String()', 'toString()', 'stringify()'],
        correta: 1 // 'toString()'
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas){
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta){
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }

        quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
    quiz.appendChild(quizItem)
}


