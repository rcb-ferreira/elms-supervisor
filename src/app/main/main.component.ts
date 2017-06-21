import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  agreed: boolean = false;

  constructor() { }

  ngOnInit() {
    this.agreed = false;
  }

  onEdit(value: boolean) {
    console.log(value);
    
    this.agreed = value;
  }
}
