// async Ractive.js, fire event once finished
(function(){
  var resource = document.createElement('script')
  resource.type = 'text/javascript'
  resource.src = '/js/ractive.js'
  resource.async = 'true'
  resource.onload = resource.onreadystatechange = function() {
    if (this.readyState && this.readyState != 'complete'
        && this.readyState != 'loaded') { return }
    try { codetrail() } catch (event) { console.error(event) }
  }
  var script = document.getElementsByTagName('script')[0]
  script.parentNode.insertBefore(resource, script)
})();

// Model
var stats = {
  scene: 0
}

// Controller for each scene, should be static.
var SCENES = [
    {
        img: 'opening.jpg'
      , text: 'Welcome to the Silicon Trail.'
      , btns: [
          {
              name: 'Begin game'
            , next: 1
            , func: function(){ }
          }
        ]
    }
  , {
        text: ''
      , btns: [
          {}
        ]
    }
]

//constructor, executed once ractive is loaded.
function codetrail() {
  trail = new Ractive({
      el: '#container'
    , template: '<img src="{{image}}"/><p>{{text}}<br/><br/>'
        + '{{#btns}}<a on-click="next">{{name}}</a>{{/btns}}</p>'
    , data: {
          image: '/img/' + SCENES[stats.scene].img
        , text: SCENES[stats.scene].text
        , btns: SCENES[stats.scene].btns
      }
  })

  // this currently only affects buttons
  trail.on({
    next: trailblaze
  })
}

// fired upon button action (possibly other controllers)
function trailblaze(event) {

  // run the SCENES[x].btns[y].func functionality
  // associated with the controller
  event.context.func()

  // controller changes scenes
  if (event.context.next !== undefined) {

    // change the model
    stats.scene = event.context.next

    // change the view
    trail.set('image', '/img/' + SCENES[stats.scene].img)
    trail.set('text', SCENES[stats.scene].text)
    trail.set('opts', SCENES[stats.scene].btns)
  }
}
