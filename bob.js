class Bob{
    constructor(x,y,radius){
       var options={
           'isStatic':true
       }

       this.body = Bodies.circle(x,y,radius,options);
       this.radius = radius;
       World.add(world,this.body);
    }

    display(){
        var pos = this.body.position
        push ();
        fill (247,109,137);
        strokeWeight(3);
        stroke (247,109,137);
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius,this.radius);
        pop ();
    }
};