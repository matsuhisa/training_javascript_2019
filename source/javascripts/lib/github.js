export default class Github {

  bar(userName) {
    return userName
  }

  async fetchUser(userName) {
    return userName
  }

  // async fetchUser(userName) {
  //   // if(userName === "" ){
  //   //   const response = await fetch(`https://api.github.com/users/${userName}`)
  //   //   console.log(response)
  //   //   if(response.status == 200) {
  //   //     const json = await response.json()
  //   //     return json
  //   //   }else{
  //   //     reject(new Error("NOT FOUND"))
  //   //   }
  //   // }else{
  //   //   reject(new Error("no user name"))
  //   // }
  // }
}
