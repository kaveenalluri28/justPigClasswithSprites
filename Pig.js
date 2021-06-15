class Pig {

      constructor( x,y){

            var options = {
                 'restitution':0.8, 
                 'friction' : 0.3,
                  'density' : 1
                 
            }
          
          this.width = 50;
          this.height = 50;

            this.body = Bodies.rectangle(x,y,this.width,this.height,options);
            this.image = loadImage("sprites/enemy.png");
            World.add(world, this.body);

      }
      display(){
           
            var pos = this.body.position;
            var angle = this.body.angle;


            push();
            translate(pos.x , pos.y);
             rotate(angle);
            imageMode(CENTER);
           image(this.image,0,0,50,50); // pos will become 0 after you translate & rotate it.
           pop();
      }
}