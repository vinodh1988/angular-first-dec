import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent  {
   mycolor:string = "#33ffd4"
   show:boolean=true
   @Input("box-name") name:string="default"
   @Input() items:string[]=[]
   constructor() {
     console.log(this.name+" is the value")
   }

   ngOnInit(){
      console.log(this.name+ " is the received value")
   }
   changeColor(event:any):void {
     
     this.mycolor=event.target.value
     this.changeShow()
   }

   changeShow() {

    this.show=!this.show
   }
}
