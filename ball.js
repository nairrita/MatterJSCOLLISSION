class Ball{
    constructor(x,y,r){
        var options = {
            restitution: 0.8,
            density: 1.0,
            friction: 0.5
        }

     this.body = Bodies.circle(x,y,r,options)
     this.body.label = "particle"
     this.x = x
     this.y = y;
     this.r = r;
     World.add(world,this.body)

}


destroy(){
    if(this.body.speed == 1){
       World.remove(world,this.body)
}
}

display(){
    fill(255);
    stroke(255);
    //console.log(this.body.speed)
    var pos = this.body.position
    push()
   translate(pos.x,pos.y)
    ellipse(0,0,this.r)
    pop()
}
}