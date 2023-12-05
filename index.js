const sumUntil = require('./escribo_inovacao');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Digite um número positivo: ', userInput => {
    sumUntil(userInput)
    readline.close();
});