class Ball {
  constructor(x, y, r,img) {
    var options = {
      restitution: 0.5,
      density: 4.0,
      isStatic : true
    };

    this.body = Bodies.circle(x, y, r/2, options);

    this.x = x;
    this.y = y;
    this.r = r;
    this.image = img;

    World.add(world, this.body);
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0, 0, this.r, this.r);
    pop();
  }
}
