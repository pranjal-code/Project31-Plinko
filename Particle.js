class Particle 
{
    constructor(x, y,r) 
    {
 
        //imp
        var options =
        {
            restitution:0.4
        }
        //radius
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        //color (random)
        this.color=color(random(0, 255), random(0, 255), random(0, 255));

        World.add(world, this.body);

    }
    display() 
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //important!!
        noStroke();

        //color generated
        fill(this.color)
        ellipseMode(RADIUS);
        
        ellipse(0, 0, this.r,this.r);
        pop();
    }

};
