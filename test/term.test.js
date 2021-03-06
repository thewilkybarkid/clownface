const assert = require('assert')
const { describe, it } = require('mocha')
const term = require('../lib/term')

describe('term', () => {
  it('should be a function', () => {
    assert.strictEqual(typeof term, 'function')
  })

  it('should return undefined if no argument is given', () => {
    const result = term()

    assert.strictEqual(typeof result, 'undefined')
  })

  it('should return undefined if null is given', () => {
    const result = term(null)

    assert.strictEqual(typeof result, 'undefined')
  })

  it('should create a Literal if only a string is given', () => {
    const result = term('test')

    assert.strictEqual(result.termType, 'Literal')
    assert.strictEqual(result.value, 'test')
  })

  it('should create a BlankNode if the type is BlankNode', () => {
    const result = term(null, 'BlankNode')

    assert.strictEqual(result.termType, 'BlankNode')
  })

  it('should use the value as blank node identifier', () => {
    const result = term('test', 'BlankNode')

    assert.strictEqual(result.termType, 'BlankNode')
    assert.strictEqual(result.value, 'test')
  })

  it('should create a NamedNode if the type is NamedNode', () => {
    const result = term('http://example.org/', 'NamedNode')

    assert.strictEqual(result.termType, 'NamedNode')
    assert.strictEqual(result.value, 'http://example.org/')
  })
})
