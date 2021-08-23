class Dustbin{
      constructor(x, y, width, height) {
    var options = {
      isStatic:true
  };

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   this.image = loadImage("pics/dustbin_pic.png");
    World.add(world, this.body);
  }
  display() {
    //rectMode(CENTER);
    
    var pos =this.body.position;
    // push();
    //  translate(pos.x, pos.y);
    // rotate(angle);
   // 
    //rectMode(CENTER);
   imageMode(CENTER);
   // fill("white");
    //rect(pos.x, pos.y, this.width,this.height);
    image(this.image, pos.x, pos.y, this.width, this.height);
    // pop();
  }
}


