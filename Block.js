class Block{
    constructor(x,y){
    
     var options ={

        isStatic:true

     }
     
     this.x=x;
     this.y=y;
     this.body=Bodies.rectangle(x,y,20,20,options);
     this.hola1=false;
     this.hola2=false;
     this.hola3=false;
     this.hola4=false;
     World.add(world,this.body);        

     }

    display(){
        
          
            push();
            rectMode(CENTER);
            stroke(10,180,243)
            fill(10,180,243);
            rect(this.body.position.x, this.body.position.y, this.width, this.height);
            pop();

    }
    }




