const { hello } = require('../hello')

test('hello world', () => {
    expect(hello).toBe('world')
})
