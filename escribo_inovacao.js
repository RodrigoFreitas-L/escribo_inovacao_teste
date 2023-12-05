const sumUntil = (number) => {
    let sum = 0;
    if (Math.sign(number) === -1) {
        console.log(`Número ${number}, precisa ser um inteiro positivo`)
        return;
    } else {
        for (let i = 0; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
    }
    console.log(`A soma dos números anteriores à ${number}, divisíveis por 3 ou 5, é: ${sum}`);
    return sum;
}

module.exports = sumUntil;