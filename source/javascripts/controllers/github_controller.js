import { Controller } from "stimulus"
import Github from "../lib/github"

export default class extends Controller {
  static targets = [ "username", "user" ]

  getUser() {
    const userName = this.usernameTarget.value

    // const github = new Github()
    // console.log(github.fetchUser(userName))

    fetch(`https://api.github.com/users/${userName}`)
    .then(this.errorHandler)
    .then(response => {
      response.json()
        .then(userInfo => {
          const view = `
<div class="github-user">
<h2>${userInfo.name}</h2>
<img src="${userInfo.avatar_url}" width="100">
</div>
`
          this.userTarget.insertAdjacentHTML('afterbegin', view)
      })
    })
    .catch(error => { console.log(error) })
  }

  errorHandler(response) {
    if(response.ok) {
      return response
    }else {
      throw Error(response.statusText)
    }
  }
}