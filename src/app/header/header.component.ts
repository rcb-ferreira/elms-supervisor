import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor() { }

  @Output() onEdit = new EventEmitter<boolean>();
  canEdit = false;

  edit(agreed: boolean) {
    this.onEdit.emit(agreed);
    this.canEdit = !this.canEdit;
  }
}

