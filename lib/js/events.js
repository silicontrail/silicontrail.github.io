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
    intermission()
  }
}

// toggle sound on and off
function orchestra(event) {

}

// restart, from scratch
function rebirth(event) {
  document.cookie = 'stats=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/;'
  stats = EXPOSITION
  intermission()
}
