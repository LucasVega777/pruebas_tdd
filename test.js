const { expect } = require('chai');
const sumar = require('./sumar'); // Requiere la función sumar

describe('Función sumar', () => {
  it('Debería sumar dos números positivos', () => {
    const resultado = sumar(5, 3);
    expect(resultado).to.equal(8);
  });

  it('Debería sumar dos números negativos', () => {
    const resultado = sumar(-2, -4);
    expect(resultado).to.equal(-6);
  });

  it('Debería sumar un número positivo y uno negativo', () => {
    const resultado = sumar(7, -5);
    expect(resultado).to.equal(2);
  });

  it('Debería devolver NaN si uno de los parámetros no es un número', () => {
    const resultado = sumar('5', 3);
    expect(resultado).to.be.NaN;
  });

  it('Debería devolver un error de calculo', () => {
    const resultado = sumar(5, 5);
    expect(resultado == 11).to.be.false;
  });
});


describe('Función restar', () => {
    it('Debería restar dos números positivos', () => {
      const resultado = restar(10, 5);
      expect(resultado).to.equal(5);
    });
  
    it('Debería restar dos números negativos', () => {
      const resultado = restar(-3, -1);
      expect(resultado).to.equal(-2);
    });
  
    it('Debería restar un número positivo y uno negativo', () => {
      const resultado = restar(8, -4);
      expect(resultado).to.equal(12);
    });
  
    it('Debería devolver NaN si uno de los parámetros no es un número', () => {
      const resultado = restar('10', 5);
      expect(resultado).to.be.NaN;
    });

    it('Debería devolver un error de calculo', () => {
        const resultado = sumar(6, 3);
        expect(resultado == 1).to.be.false;
      });
  });