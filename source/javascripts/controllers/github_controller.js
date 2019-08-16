import { Controller } from "stimulus"
import Github from "../lib/github"

export default class extends Controller {
  static targets = [ "username", "user" ]

  getUser() {
    const userName = this.usernameTarget.value

    const github = new Github()
    console.log(github.fetchUser(userName))

    // fetch(`https://api.github.com/users/${userName}`)
    // .then(response => {
    //   console.log(response.status)
    //   response.json().then(userInfo => {
    //     console.log(userInfo)
    //   });
    // });
  }
}