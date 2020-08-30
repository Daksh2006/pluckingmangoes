class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.08,
            length:5
        }
         this.chain = Constraint.create(options);
         this.pointB = pointB; 
         World.add(world,this.chain);
    }

       display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        strokeWeight(6);
        line(pointA.x,pointA.y,this.pointB.x, this.pointB.y);
        }
       }

       fly(){
        this.chain.bodyA = null;
       }
       attach(body){
        this.chain.bodyA = body;
      }
}