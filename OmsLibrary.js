function isTouching(object1,object2){
    if(object1.x - object2.x <= object1.width/2+object2.width/2
      && object2.x - object1.x <= object1.width/2+object2.width/2
      && object1.y-fixedRect.y<= object1.height/2+object2.height/2
      && object2.y-object1.y<= object1.height/2+object2.height/2){
      return true;
    }
    else{
      return false;
    }
  }
  function bounceoff(obj1, obj2){
    if(obj1.x - obj2.x < obj1.width/2+obj2.width/2
      && obj2.x - obj1.x < obj1.width/2+obj2.width/2){
         obj1.velocityX = obj1.velocityX * (-1);
          obj2.velocityX =obj2.velocityX * (-1);
      }
    }






