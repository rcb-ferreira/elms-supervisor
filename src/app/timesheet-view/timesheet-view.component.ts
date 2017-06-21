import { Component, Input, OnChanges, SimpleChange, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-timesheet-view',
  templateUrl: './timesheet-view.component.html',
  styleUrls: ['./timesheet-view.component.css']
})
export class TimesheetViewComponent implements OnInit {

  @Input() term: string;

  users: Array<any>;
  clockColms: number;
  clockGutter: number;
  searchName: string = '';
  
  touch: boolean;
  filterOdd: boolean;
  yearView: boolean;
  minDate: Date;
  maxDate: Date;
  startAt: Date;
  date: Date;
  dateFilter = (date: Date) => date.getMonth() % 2 == 1 && date.getDate() % 2 == 0;

  constructor() {
      this.users = [
        {
          name: 'Rui Ferreira',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]  
        },
        {
          name: 'Glenn',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
        },
        {
          name: 'Norris',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
        },
        {
          name: 'Rui Human',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
        },
        {
          name: 'Glenn',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
        },
        {
          name: 'Norris',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
        },
        {
          name: 'Rui Halow',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
        },
        {
          name: 'Glenn Flens',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
        },
        {
          name: 'Norris Bech',
          position: 'Forklift',
          breakdown: [
            {
              value: 40,
              title: 'Normale Time'
            },
            {
              value: 10,
              title: 'Over Time 1.5'
            },
            {
              value: 5,
              title: 'Over Time 2.0'
            },
            {
              value: 'Rec',
              title: 'Cost center'
            }
          ]
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

	}

  onSelect(key): void {

    this.users[key]['selected'] = !this.users[key]['selected'];
  }
}

