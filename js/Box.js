class Box {
  constructor(x, y, w, h,isStatic) {
    var options = {
      isStatic: isStatic,
      
    };

    this.body = Bodies.rectangle(x, y, w, h, options);

    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = "#000000";
    World.add(world, this.body);
  }

  setAngle(angle) {
    Matter.Body.setAngle(this.body, angle);
  }

  setColor(color) {
    this.color = color;
  }

  display() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    fill(this.color);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();
  }
  displayWithImage(img) {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(img,0, 0, this.w, this.h);
    pop();
  }

}
