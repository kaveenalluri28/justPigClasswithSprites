class Box {

      constructor( x,y,width,height){

            var options = {
                 'restitution':0.8, 
                 'friction' : 0.3,
                  'density' : 1
                 
            }
          
          this.width = width;
          this.height = height;

            this.body = Bodies.rectangle(x,y,this.width,this.height,options);
            this.image = loadImage("sprites/wood1.png");
            World.add(world, this.body);

      }
      display(){
           
            var pos = this.body.position;
            var angle = this.body.angle;


            push();
            translate(pos.x , pos.y);
             rotate(angle);
            imageMode(CENTER);
           image(this.image,0,0,this.width, this.height); // pos will become 0 after you translate & rotate it.
           pop();
      }
}