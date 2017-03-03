enum bodyTypes {star, planet, moon};

interface Params {
  position: p5.Vector,
  radius: number,
  mass: number
}

const G = 0.9;

class Body {

  position: p5.Vector;
  radius: number;
  velocity: p5.Vector;
  acceleration: p5.Vector;

  mass: number;
  name: string;
  type: bodyTypes;
  color: string;

  constructor(name:string, params:Params) {
    this.name = name;
    this.position = createVector(params.position.x, params.position.y);
    this.radius = params.radius;
    this.mass = params.mass;

    this.velocity = createVector();
    this.acceleration = createVector();
    this.color = "#fff";
  }

  attracted(target: Body) {
    var force = p5.Vector.sub(target.position, this.position);
    var dsSquared = force.magSq();
    dsSquared = constrain(dsSquared, 25, 150);
    var strength = G * (this.mass, target.mass) / dsSquared;

    force.setMag(strength);
    this.acceleration.add(force.div(this.mass));
  }

  update() {
    this.position.add(this.velocity);
    this.position.add(this.acceleration);
  }

  show() {
    noFill();
    stroke(this.color);
    strokeWeight(this.radius);
    point(this.position.x, this.position.y);
    //ellipse(this.position.x, this.position.y, this.radius, this.radius);
  }
}
