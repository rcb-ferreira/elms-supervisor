import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agreed: boolean;
  term: string;
  agreedClock: boolean;

  onEdit(agreed: boolean) {
    this.agreed = agreed;
  }

  search(term: string) {
    this.term = term;
  }
  
  onClock(agreedClock: boolean) {
    this.agreedClock = agreedClock;
  }
}
