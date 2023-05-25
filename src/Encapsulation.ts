import { component } from '@angular/core'



@component({


})
export  class Encapsulation {

let salary =20000;
let overtime =10;
let rate=20;

function getways(salary ,overtime ,rat)
{
  return salaryl+(overtime*rate);
}
let employee ={
salary:20000;
overtime:10;
rate:20;

getways:function (){
  return this.salary+(this.overtime*this .rate);
}
}
employee.getways();
}