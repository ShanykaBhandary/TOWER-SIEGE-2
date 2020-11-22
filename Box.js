class Box extends Base{
      constructor(x,y,width,height){
          super(x,y,50,50)
          this.image=loadImage("block.png")
          this.Visibility = 255;
          }

         
      
      display(){
      if(this.body.speed < 2){
          super.display();
      }
        else{
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50, 50);
        pop();
      }
      
 }
 score(){
  if(this.Visibility<0 && this.Visibility >- 1005){

    score++
  }
}
}
