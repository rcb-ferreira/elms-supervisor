import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  @Output() update = new EventEmitter();
  searchUser: string;

  constructor() { 
  }

  ngOnInit() {
    this.searchUser = '';
    this.update.emit('');
  }

  onKey(str: string) {    
    this.update.emit(str);
  }
}
