class Bob{
    constructor(x,y,radius){
       var options={
           'isStatic':false
       }

       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push ();
        strokeWeight(1);
        fill (189,28,105);
        stroke (189,28,105);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        pop ();
    }
};