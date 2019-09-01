import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "background", "body" ]

  toggle(event) {
    const background = this.backgroundTarget
    const body = this.bodyTarget

    if( body.getAttribute('aria-disabled') === 'true' ) {
      body.setAttribute('aria-disabled', false)
      background.setAttribute('aria-disabled', false)
    }else {
      body.setAttribute('aria-disabled', true)
      background.setAttribute('aria-disabled', true)
    }
    event.stopImmediatePropagation()
  }
}