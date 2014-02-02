function loadjs(src) {
  var resource = document.createElement('script')
  resource.type = 'text/javascript'
  resource.src = src
  resource.async = 'true'
  resource.onload = resource.onreadystatechange = function() {
    if (this.readyState && this.readyState != 'complete'
        && this.readyState != 'loaded') { return }
    try { game() } catch (e) { console.error(e) }
  }
  var script = document.getElementsByTagName('script')[0]
  script.parentNode.insertBefore(resource, script)
}

console.log('loading scripts...')

loadjs('/js/ractive.js')
loadjs('/js/codetrail.js')
