const assert = require('assert')
const expect = require('chai').expect
const eoc = require('.')

describe('tests for module', () => {
  describe('string', () => {
    it('should be type string', () =>{
      expect(eoc('aa')).to.be.a('string')
    })
  })
  
  describe('string length', () => {
    it('should be even', () => {
      expect(eoc('aaaa').length).to.equal(4)
    })
  })

  describe('string length', () => {
    it('should be even', () => {
      expect(eoc('aaa').length).to.equal(3)
    })
  })

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be odd', () => {
      expect(eoc('aaaa')).to.equal('aAaA')
    })
  })

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be odd', () => {
      expect(eoc('aaaaa')).to.equal('aAaAa')
    })
  })

})

