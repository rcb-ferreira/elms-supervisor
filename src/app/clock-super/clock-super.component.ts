import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';

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
  selected: any;
  searchName: string = '';
  
  constructor() {
    
      this.users = [
        {
          name: 'Rui Ferreira',
          time: new Date('1/1/16'),
        },
        {
          name: 'Glenn',
          time: new Date('1/17/16'),
        },
        {
          name: 'Noris',
          time: new Date('1/28/16'),
        },
            {
          name: 'Rui Ferreira',
          time: new Date('1/1/16'),
        },
        {
          name: 'Glenn',
          time: new Date('1/17/16'),
        },
        {
          name: 'Noris',
          time: new Date('1/28/16'),
        },
            {
          name: 'Rui Ferreira',
          time: new Date('1/1/16'),
        },
        {
          name: 'Glenn',
          time: new Date('1/17/16'),
        },
        {
          name: 'Noris',
          time: new Date('1/28/16'),
        }
      ];
  }

  ngOnInit() {

    this.users.forEach((element, key) => {
      
      this.users[key]['selected'] = false;
    });
    
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
