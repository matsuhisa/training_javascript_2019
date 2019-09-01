import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "body", "handle" ]

  toggle() {
    const body = this.bodyTarget

    if( body.getAttribute('aria-disabled') === 'true' ) {
      body.setAttribute('aria-disabled', false)
    }else {
      body.setAttribute('aria-disabled', true)
    }
  }
}