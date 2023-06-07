import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hidden: boolean = false;
  constructor() {

  }

  ngOnInit(): void {

  }

  @HostListener('window:scroll', ['$event']) getScrollHeight(event: any) {
    if(window.pageYOffset <= 100 )
     this.hidden = false;
    else
      this.hidden = true;
 }

}
