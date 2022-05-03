import P5, { Vector } from 'p5';
import { Ball } from './Ball';

new P5((p) => {
  const ball = new Ball(p);
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(0);
    ball.display();
    ball.update();
    ball.applyForce(new Vector(0, 0.05));
    ball.checkEdges();
  };

  p.keyPressed = () => {
    if (p.key === ' ') {
      ball.applyForce(new Vector(0, -1.5));
      // ball.jump();
    }
  };
});
