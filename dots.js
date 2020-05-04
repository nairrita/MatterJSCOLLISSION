class Dots{
    constructor(x,y){
        var options = {
            isStatic: true
        }

        this.body =  Bodies.rectangle(x,y,10,10,options)
        this.body.label = "dots"
        this.x = x;
        this.y = y;
        this.width = 10;
        this.height = 10;
        World.add(world,this.body)
    }

   display(){
       fill(255)
       stroke(255)
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop();
    }
}