class Planet extends Body {

  constructor(name:string, params:Params) {
    super(name, params);
    this.type = bodyTypes.planet;

    this.velocity = createVector(0, 10);
    this.color = randomColor();
  }
}
