import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'greetings',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  msg = "Hello World is my first page!";
  constructor() { }
  ngOnInit(): void {
    //this.msg = "Changed by Init";
  }

}
