// load the game
function load() {
  return JSON.parse(
    document.cookie.match(new RegExp(treat + '=([^;]+)'))[1]
  )
}

// change the scene
function intermission() {
  trail.set({
      image: SCENES[stats.scene].img
    , text: SCENES[stats.scene].text
    , btns: SCENES[stats.scene].btns
  })
  document.cookie = 'stats=' + JSON.stringify(stats) + '; path=/;'
}
