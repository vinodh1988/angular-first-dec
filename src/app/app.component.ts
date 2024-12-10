import { Component } from '@angular/core';
interface Box {
  name:string;
  values: string[];
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
    appname:string = "First  Angular"
    boxes:Box[]= [
      {name:"Languages", values: ["Java","Javascript","C#"]},
      {name:"Databases", values: ["MySQl","SQL Server","Oracle"]},
      {name:"Cloud Services", values: ["Azure","AWS","GCP"]},
      {name:"AI Tools", values: ["Open AI","Hugging Face"]},
    ]
}
