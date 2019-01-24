const assert = require('assert');
const expect = require('chai').expect;
const eoc = require('.');

describe('tests for module', () => {
  describe('string', () => {
    it('should be type string', () =>{
      expect(eoc('aa')).to.be.a('string');
    });
  });

  describe('number', () => {
    it('should not work for type number', () =>{
      expect(() => eoc(1).to.throw(TypeError)); 
    });
  });

  describe('array', () => {
    it('should not work for type array', () =>{
      expect(() => eoc(['a','b','c']).to.throw(TypeError)); 
    });
  });

  describe('object', () => {
    it('should not work for type object', () =>{
      expect(() => eoc({ 'a': 1 }).to.throw(TypeError)); 
    });
  });

  describe('null', () => {
    it('should not work for type null', () =>{
      expect(() => eoc(null).to.throw(TypeError)); 
    });
  });

  describe('undefined', () => {
    it('should not work for type undefined', () =>{
      expect(() => eoc(undefined).to.throw(TypeError)); 
    });
  });
  
  describe('string length', () => {
    it('should be even', () => {
      expect(eoc('aaaa').length).to.equal(4);
    })
  });

  describe('string length', () => {
    it('should be odd', () => {
      expect(eoc('aaa').length).to.equal(3);
    });
  });

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be correct', () => {
      expect(eoc('aaaa')).to.equal('aAaA');
    });
  });

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be correct', () => {
      expect(eoc('aaaaa')).to.equal('aAaAa');
    });
  });

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be correct', () => {
      expect(eoc('aaa  bbb c aaa')).to.equal('aAa  bBb c aAa');
    });
  });

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be correct', () => {
      expect(eoc('aaa@ #i  bbb []1c aaa')).to.equal('aAa@ #I  bBb []1C aAa');
    });
  });

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be correct', () => {
      expect(eoc('blah blah blahh')).to.equal('bLaH bLaH bLaHh');
    });
  });

});
