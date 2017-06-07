import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agreed: boolean;
  agreedClock: boolean;

  onEdit(agreed: boolean) {
    this.agreed = agreed;
  }
  
  onClock(agreedClock: boolean) {
    this.agreedClock = agreedClock;
  }
}
