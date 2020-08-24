import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textcls='';
text:any;
textSize=10;
  student:any=[
    "shazaib","student",'lorem ipsum is the best content'
  ]

  setText(events){
    const val=events.target.value;
    this.text=val
  }
  setValue(event){
    const val=event.target.value;
    this.textSize=val
  }
  setColor(event){
    const val =event.target.value;
    this.textcls=val

  }
}
