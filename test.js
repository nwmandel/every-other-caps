const assert = require('assert')
const expect = require('chai').expect
const eec = require('.')

describe('tests for module', () => {
  describe('string', () => {
    it('should be type string', () =>{
      expect(eec('aa')).to.be.a('string')
    })
  })
  
  describe('string length', () => {
    it('should be even', () => {
      expect(eec('aaaa').length).to.equal(4)
    })
  })

  describe('string length', () => {
    it('should be even', () => {
      expect(eec('aaa').length).to.equal(3)
    })
  })

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be odd', () => {
      expect(eec('aaaa')).to.equal('aAaA')
    })
  })

  describe('string should start with lowercase then every other character should be capital', () => {
    it('should be odd', () => {
      expect(eec('aaaaa')).to.equal('aAaAa')
    })
  })

})

