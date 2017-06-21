import { Component, Input, OnChanges, SimpleChange, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-clock-super',
  templateUrl: './clock-super.component.html',
  styleUrls: ['./clock-super.component.css']
})
export class ClockSuperComponent implements OnInit {
  @Input() agreed: boolean;
  @Input() term: string;

  toggleClock: boolean = false;
  users: Array<any>;
  tiles: Array<any>;
  selected: any;
  clockColms: number;
  clockGutter: number;
  searchName: string = '';


  constructor() {
      this.users = [
        {
          name: 'Rui Ferreira',
          time:'Adcorp',
        },
        {
          name: 'Glenn',
          time: 'Adcorp',
        },
        {
          name: 'Norris',
          time: 'Adcorp',
        },
            {
          name: 'Rui Ferreira',
          time:'Adcorp',
        },
        {
          name: 'Glenn',
          time: 'Adcorp',
        },
        {
          name: 'Norris',
          time: 'Adcorp',
        },
            {
          name: 'Rui Ferreira',
          time:'Adcorp',
        },
        {
          name: 'Glenn',
          time: 'Adcorp',
        },
        {
          name: 'Norris',
          time: 'Adcorp',
        }
      ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resize();
  }

  ngOnInit() {

    this.users.forEach((element, key) => {

      this.users[key]['selected'] = false;
    });

    this.resize();
  }

  resize() {

    let winwidth = window.innerWidth;

    if ( (winwidth >= 600) && (winwidth < 1024) ) {
      this.clockColms = 2;
      this.clockGutter = 10;
    } else if ( (winwidth >= 1024) && (winwidth < 1440) ) {
      this.clockColms = 3;
      this.clockGutter = 10;
    } else if ( (winwidth >= 1440) ) {
      this.clockColms = 4;
      this.clockGutter = 10;
    } else {
      this.clockColms = 1;
      this.clockGutter = 1;
    }
  }

	ngOnChanges(changes: {[ propName: string]: SimpleChange}) {

    if ((changes['term'] !== undefined) && changes['term'].currentValue) {
      this.searchName = changes['term'].currentValue
    } else {
      this.searchName = ''
    }

    if (changes['agreed']) {
      this.toggleClock = !this.toggleClock;
    }
	}

  onSelect(key): void {

    this.users[key]['selected'] = !this.users[key]['selected'];
  }

}
