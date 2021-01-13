class Wall{

    constructor(x,y,width,height){
            var options={
            isStatic:true,
            friction:0.5,
            density:0.5
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world,this.body)
    }
    display()
    {
        var wall=this.body.position;
        push()
        translate(wall.x,wall.y);
        rectMode(CENTER);
        strokeWeight(3)
        fill("cyan")
        rect(0,0,this.width,this.height)
        pop()
    }
}