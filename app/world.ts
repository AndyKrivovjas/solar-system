class World {
  objects: Body[] = [];

  constructor() {

  }

  add(item) {
    this.objects.push(item);
  }

  render() {
    var self = this;

    self.objects.forEach(function(item) {
      self.objects.forEach(function(target) {
        item.attracted(target);
      });
      item.update();
      item.show();
    });
  }
}
