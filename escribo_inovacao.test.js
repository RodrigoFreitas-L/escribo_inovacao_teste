const sumUntil = require('./escribo_inovacao');

describe('Testes da função sumUntil', () => {
    test('Soma os números anteriores à 10, que sejam divisíveis por 3 ou 5', () => {
        expect(sumUntil(10)).toBe(23);
    });
    test('Soma os números anteriores à 11, que sejam divisíveis por 3 ou 5', () => {
        expect(sumUntil(11)).toBe(33);
    });
    test('Se retorna a mensagem caso o número não seja um inteiro positivo', () => {
        const logSpy = jest.spyOn(console, 'log');
        sumUntil(-1);
        expect(logSpy).toHaveBeenCalledWith('Número -1, precisa ser um inteiro positivo');
    });
});
