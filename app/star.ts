class Star extends Body {

  constructor(name:string, params:Params) {
    super(name, params);
    this.type = bodyTypes.star;

    this.color = '#fcef00';
  }
}
