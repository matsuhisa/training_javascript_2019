import Github from '../../source/javascripts/lib/github'


describe('Github', ()=>{
  describe('#fetchUser', ()=>{

    beforeEach(() => fetch.resetMocks())

    it('存在する名前の時', async () => {
      fetch.mockResponse(JSON.stringify({ name: 'matsuhisa', avatar_url: "https://www.foo.jp/" }), { status: 200 })

      const github = new Github()
      const userInfo = await github.fetchUser('matsuhisa')
      expect(userInfo).toHaveProperty('name', 'matsuhisa')
      expect(userInfo).toHaveProperty('avatar_url', 'https://www.foo.jp/')
    })

    it('存在しない名前の時', async () => {
      fetch.mockResponse(JSON.stringify({}), { status: 403, statusText: "Forbidden"})

      const github = new Github()
      await expect(github.fetchUser('matsuhisa')).rejects.toEqual(new Error('Forbidden'))
    })
  })
})