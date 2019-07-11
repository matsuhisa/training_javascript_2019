window.onload = function(){
  var HanddleElements = document.getElementsByClassName('accordion-handdle')
  var BodyElements = document.getElementsByClassName('accordion-body')

  if(HanddleElements) {
    for(var i=0; i < HanddleElements.length; i++) {
      HanddleElements[i].addEventListener('click', function(){
        var targetId = this.getAttribute('data-target')
        for(var i=0; i < BodyElements.length; i++) {
          if(BodyElements[i].getAttribute('data-target') == targetId){
            if(BodyElements[i].getAttribute('aria-disabled') == 'true') {
              BodyElements[i].setAttribute('aria-disabled', false)
            }else{
              BodyElements[i].setAttribute('aria-disabled', true)
            }
          }
        }
      })
    }
  }
}