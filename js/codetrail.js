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

var stats = {
  screen: 0
}

var SCREENS = [
    {
        text: 'Welcome to Silicon Trail.'
      , opts: [
          { name: 'Begin game', link: '0',
            func: function(){ stats.screen = 1 }}
        ]
    }
  , {
        text: ''
      , opts: [
          {}
        ]
    }
]

function game() {
  trail = new Ractive({
      el: '#container'
    , template: '<img src="{{image}}"/><p>{{text}}<br/><br/>'
        + '{{#opts}}<a on-click="next" href="#{{link}}">{{name}}</a>{{/opts}}</p>'
    , data: {
          image: '/img/' + stats.screen + '.jpg'
        , text: SCREENS[stats.screen].text
        , opts: SCREENS[stats.screen].opts
      }
  })
  trail.on({
    next: trNext
  })
}

function trNext(event) {
  var select = window.location.hash.slice(1)
  console.log(select)
  SCREENS[stats.screen].opts[select].func()
  trail.set('image', '/img/' + stats.screen + '.jpg')
  trail.set('text', SCREENS[stats.screen].text)
  trail.set('opts', SCREENS[stats.screen].opts)
}
