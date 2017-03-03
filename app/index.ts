var world = new World();

function setup () {
  createCanvas(windowWidth, windowHeight);

  var screenCenter = createVector(windowWidth / 2, windowHeight / 2);
  var resolution = 1;

  var sun = new Star('Sun', {
    position: screenCenter,
    radius: 60,
    mass: 1000
  });

  var mercury = new Planet('Mercury', {
    position: screenCenter.add(createVector(40, 0)),
    radius: 6 * resolution,
    mass: 4
  });

  var venus = new Planet('Venus', {
    position: screenCenter.add(createVector(80, 0)),
    radius: 9 * resolution,
    mass: 4.5
  });

  var earth = new Planet('Earth', {
    position: screenCenter.add(createVector(120, 0)),
    radius: 20 * resolution,
    mass: 5
  });

  var mars = new Planet('Mars', {
    position: screenCenter.add(createVector(160, 0)),
    radius: 10 * resolution,
    mass: 5.3
  });

  var jupiter = new Planet('Jupiter', {
    position: screenCenter.add(createVector(160, 0)),
    radius: 100 * resolution,
    mass: 40
  });

  var saturn = new Planet('Saturn', {
    position: screenCenter.add(createVector(180, 0)),
    radius: 80 * resolution,
    mass: 35
  });

  var uranus = new Planet('Uranus', {
    position: screenCenter.add(createVector(200, 0)),
    radius: 40 * resolution,
    mass: 8.3
  });

  var neptune = new Planet('Neptune', {
    position: screenCenter.add(createVector(200, 0)),
    radius: 38 * resolution,
    mass: 8.3
  });

  var pluto = new Planet('Pluto', {
    position: screenCenter.add(createVector(200, 0)),
    radius: 2 * resolution,
    mass: 0.5
  });

  world.add(sun);
  world.add(mercury);
  world.add(venus);
  world.add(earth);
  world.add(mars);
  world.add(jupiter);
  world.add(saturn);
  world.add(uranus);
  world.add(neptune);
  // world.add(pluto);
}

function draw() {
  background(51);

  world.render();
  meter.tick();
}
