// Default stats
var EXPOSITION = {
      scene: 0
    }
  , stats = JSON.parse(
      document.cookie.match(new RegExp('stats=([^;]+)'))[1]
    ) || EXPOSITION

//constructor, executed once ractive is loaded.
(function codetrail() {
  trail = new Ractive({
      el: '#container'
    , template: '<img src="{{image}}"/><p>{{text}}<br/><br/>'
        + '{{#btns}}<a on-click="next">{{name}}</a>{{/btns}}</p>'
    , debug: true
    , data: {
          image: SCENES[stats.scene].img
        , text: SCENES[stats.scene].text
        , btns: SCENES[stats.scene].btns
      }
  })

  // this currently only affects buttons
  trail.on({
      next: trailblaze
    , sound: orchestra
    , restart: rebirth
  })
})();
