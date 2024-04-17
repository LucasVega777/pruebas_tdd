const {sumar, restar} = require('./index.js');
//const expect = require('chai').expect;

//import * as chai from 'chai';
var expect
import("chai").then(chai => {
  expect = chai.expect;  
});


describe('Función sumar', () => {
  it('Debería sumar dos números positivos', () => {
    const resultado = sumar(2, 3);
    expect(resultado).to.equal(5);
    if(resultado!=5){
      throw 'Error';
    }
  });

  it('Debería sumar dos números negativos', () => {
    const resultado = sumar(-2, -4);
    expect(resultado).to.equal(-6);
    if(resultado!=-6){
      throw 'Error';
    }
  });

  it('Debería sumar un número positivo y uno negativo', () => {
    const resultado = sumar(7, -5);
    expect(resultado).to.equal(2);
    if(resultado!=2){
      throw 'Error';
    }
  });

  it('Debería devolver un error de calculo', () => {
    const resultado = sumar(5, 5);
    expect(resultado == 11).to.be.false;
    if(resultado != 10){
      throw 'Error';
    }
  });
});


describe('Función restar', () => {
    it('Debería restar dos números positivos', () => {
      const resultado = restar(10, 5);
      expect(resultado).to.equal(5);
      if(resultado!=5){
        throw 'Error';
      }
    });
  
    it('Debería restar dos números negativos', () => {
      const resultado = restar(-3, -1);
      expect(resultado).to.equal(-2);
      if(resultado!=-2){
        throw 'Error';
      }
    });
  
    it('Debería restar un número positivo y uno negativo', () => {
      const resultado = restar(8, -4);
      expect(resultado).to.equal(12);
      if(resultado!=12){
        throw 'Error';
      }
    });

    it('Debería devolver un error de calculo', () => {
        const resultado = restar(6, 3);
        expect(resultado == 1).to.be.false;
        if(resultado != 3){
          throw 'Error';
        }
    });
      
  });