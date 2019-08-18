import { Controller } from "stimulus"
import Github from "../lib/github"

export default class extends Controller {
  static targets = [ "username", "user" ]

  async getUser() {
    const userName = this.usernameTarget.value

    const github = new Github()
    const userInfo = await github.fetchUser(userName)
    this.render(userInfo)
  }

  render(userInfo) {
    const view = `
<div class="github-user">
<h2>${userInfo.name}</h2>
<img src="${userInfo.avatar_url}" width="100">
</div>
`
    this.userTarget.insertAdjacentHTML('afterbegin', view)
  }
}