import p5, { Vector } from 'p5';
export class Ball {
  location;
  velocity;
  acceleration;
  mass;
  p;

  constructor(p: p5) {
    this.p = p;
    this.mass = 1;
    this.location = new Vector(30, 30);
    this.velocity = new Vector(0, 0);
    this.acceleration = new Vector(0, 0);
  }

  applyForce(force: Vector) {
    Vector.div(force, this.mass);
    this.acceleration.add(force);
  }

  update() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    this.p.stroke(0);
    this.p.fill(175);
    this.p.ellipse(
      this.location.x,
      this.location.y,
      this.mass * 16,
      this.mass * 16
    );
  }

  checkEdges() {
    if (this.location.x > this.p.width) {
      this.location.x = this.p.width;
      this.velocity.x *= -1;
      this.velocity.x *= 0.5;
    } else if (this.location.x < 0) {
      this.velocity.x *= -1;
      this.velocity.x *= 0.5;
      this.location.x = 0;
    }

    if (this.location.y > this.p.height) {
      this.velocity.y *= -1;
      this.velocity.y *= 0.5;
      this.location.y = this.p.height;
    }
  }
}
