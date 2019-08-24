const add = require('../../source/javascripts/for_test_sample/add')

describe('test funciton add', () => {
  it('1 + 2 = 3', done => {
    function callback(data) {
      expect(data).toBe(3)
      done()
    }

    add(1, 2, callback)
  })
})