class Box {
  constructor(x, y, width, height){
    var options={
      friction:0.1,
      restitution:0.8
    }
    this.body4=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body4)
  }
  display(){
    
    var angle = this.body4.angle;
    push();
    //translate(this.body4.position.x, this.body4.position.y);
    rotate(angle)
    rectMode(CENTER)
    rect(this.body4.position.x,this.body4.position.y,this.width,this.height)
    fill(0,255,255);
    pop();
  }

};
