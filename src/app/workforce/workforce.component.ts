import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workforce',
  templateUrl: './workforce.component.html',
  styleUrls: ['./workforce.component.css']
})
export class WorkforceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  term: string;
  agreedClock: boolean;

  search(term: string) {
    this.term = term;
  }
  
  onClock(agreedClock: boolean) {
    this.agreedClock = agreedClock;
  }
}
