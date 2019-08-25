const coin = require('../../../source/javascripts/for_test_sample/coin')

describe('coin', () => {
  describe('return する方法', () =>{
    it('when number is 9', () =>{
      const number = 9
      return coin(number).then(value => {
        expect(value).toBe('成功')
      })
    })
  
    it('when number is 10', () =>{
      const number = 10
      expect.assertions(1)
      return coin(number).catch(error => {
        expect(error).toEqual(new Error('失敗'))
      })
    })
  })

  describe('async/await を使う', () => {
    it('when 9', async () => {
      const value = await coin(9)
      expect(value).toBe('成功')
    })

    it('when 10', async () => {
      await expect(coin(10)).rejects.toEqual(new Error('失敗'))
    })
  })
})