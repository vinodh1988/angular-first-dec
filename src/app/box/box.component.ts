import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {
   mycolor:string = "#33ffd4"

   changeColor(event:any):void {
     
     this.mycolor=event.target.value
   }
}
