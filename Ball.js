class Ball {

      constructor( x,y, radius){

            var options = {
                 'restitution':1.5, 
                  'density' : 1
                 
            }
          
          this.radius = radius;
          

            this.body = Bodies.circle(x,y,this.radius,options);
            World.add(world, this.body);

      }
      display(){
           
           ellipseMode(RADIUS);
         
           ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius);

      }
}