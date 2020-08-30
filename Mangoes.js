class Mangoes extends SuperClass{
    constructor(x,y){
      var options = {
        isStatic: true
      }
      super(x,y,50,50);
      this.image = loadImage("sprite/mango.png");
    }
  
    display() {
      super.display();
    }
  }
  