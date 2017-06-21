import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // this.agreed = false;
    // this.sub = this.route.params.subscribe(params => {
    //    this.id = +params['id']; // (+) converts string 'id' to a number

    //    // In a real app: dispatch action to load the details here.
    // });
    // console.log(this.route);
  }

  @Output() onEdit = new EventEmitter<boolean>();
  @Output() toggleMenu = new EventEmitter<boolean>();
  canEdit:boolean = false;
  canTrigger:boolean = false;

  edit(value: boolean) {
    this.onEdit.emit(value);
    this.canEdit = !this.canEdit;
  }

  // trigger(value: boolean) {
  //   this.toggleMenu.emit(value);
  //   this.canTrigger = !this.canTrigger;
  // }
}

