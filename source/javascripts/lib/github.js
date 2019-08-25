export default class Github {

  async fetchUser(userName) {
    if(userName !== "") {
      const response = await fetch(`https://api.github.com/users/${userName}`)
      if(response.status == 200) {
        return await response.json()
      }else{
        throw Error(response.statusText)
      }  
    }else {
      throw Error("Empty userName")
    }
  }
}
