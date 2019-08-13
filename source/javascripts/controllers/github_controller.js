import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "username", "user" ]

  // connect() {
  //   console.log("Hello, Stimulus!", this.element)
  // }

  getUser() {
    console.log(this.usernameTarget.value)
    const userName = this.usernameTarget.value

    fetch(`https://api.github.com/users/${userName}`)
    .then(response => {
      console.log(response.status)
      response.json().then(userInfo => {
        console.log(userInfo)
      });
    });
  }
}