(function(){
  var resource = document.createElement('script')
  resource.type = 'text/javascript'
  resource.src = '/js/ractive.js'
  resource.async = 'true'
  resource.onload = resource.onreadystatechange = function() {
    if (this.readyState && this.readyState != 'complete'
        && this.readyState != 'loaded') { return }
    try { game() } catch (event) { console.error(event) }
  }
  var script = document.getElementsByTagName('script')[0]
  script.parentNode.insertBefore(resource, script)
})();

function game() {
  trail = new Ractive({
      el: '#container'
    , template: '<img src="{{image}}"/><p>{{text}}<br/><br/>'
        + '<a on-click="next" href="#">{{cont}}</a></p>'
    , data: {
          image: 'img/foobar.jpg'
        , text: 'hello, world'
        , cont: 'next'
      }
  })
  trail.on({
    next: trNext
  })
}

game.stats = {

}


function trNext(event) {

}
