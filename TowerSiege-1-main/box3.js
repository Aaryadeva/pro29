class Box3 {
    constructor(x, y, width, height){
      var options={
        friction:0.1,
        restitution:0.8
      }
      this.body3=Bodies.rectangle(x,y,width,height,options)
      this.width=width
      this.height=height
      World.add(world,this.body3)
    }
    display(){
      var pos =this.body3.position;
      
      fill(244,91,80);
      var angle = this.body3.angle;
      push();
      //translate(this.body3.position.x, this.body3.position.y);
      rotate(angle)
      rectMode(CENTER)
      rect(this.body3.position.x,this.body3.position.y,this.width,this.height)
     
      pop();
    }
  
  }