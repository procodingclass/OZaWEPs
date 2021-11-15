class Sling {
  constructor(point, body) {
    var options = {
      pointA: point,
      bodyB: body,
      stiffness: 1,
      length: 10
    };
    this.pointA = point;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }
 

  display() {
      var posA = this.sling.pointA;
      var posB = this.sling.bodyB.position;
      push();
      stroke("#ffb74d");
      strokeWeight(6);
      line(posA.x, posA.y, posB.x, posB.y);
      
      pop();
  }
}
