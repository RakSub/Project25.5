class Ball {
  constructor(x, y, width, height, angle) {
    var options = {
      isStatic:false,
      restitution: 0.3,
      friction: 0.5,
      density: 1.2
    };
    
    this.body = Bodies.circle(x, y, height/2, options);
    this.width = width * 1.5;
    this.height = height * 1.5;
    this.image = loadImage("pics/paper_pic.png");
   //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
  }
  display() {
    //rectMode(CENTER);
    var angle = this.body.angle;
    var pos =this.body.position;

    // push();
    //  translate(pos.x, pos.y);
    // rotate(angle);
   // 
   imageMode(CENTER);
   
   image(this.image, pos.x, pos.y, this.width, this.height); 
    //fill("#eb34d5");
    //ellipse(pos.x, pos.y, this.height);
   // image(this.image, 0, 0, this.width, this.height);
    // pop();
  }
}
