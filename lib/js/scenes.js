var SCENES = [
    { // scene 0, title screen
        img: '/img/opening.jpg'
      , text: 'Welcome to the Silicon Trail.'
      , btns: [
          {
              name: 'Begin game'
            , next: 1
            , func: function(){ }
          }
        ]
    }
  , { // scene 1, foobar
        img: '/img/foobar.jpg'
      , text: 'foobar'
      , btns: [
          {
              name: 'foo'
            , func: function(){ alert('bar') }
          }
        ]
    }
]
