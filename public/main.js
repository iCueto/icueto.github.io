var app = document.getElementById('iskanderCrow');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(100)
  .typeString('ISKANDER CROW.')
  .pauseFor(100)
  .deleteAll()
  .typeString('ALEXANDRO CUETO.')
  .pauseFor(1000)
  .start()