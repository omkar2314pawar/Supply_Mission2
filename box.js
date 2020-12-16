class Box {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.5,
            'friction':0.3,
            'density':1.0,
          
        }

        var box_options = {
          isStatic : true

        }
        this.body = Bodies.rectangle(x, y, width, height, options,box_options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        console.log(angle);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0, 0, this.width, this.height);
        pop();
      }
  };