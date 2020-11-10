import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from 'src/app/shared/base.component';

@Component({
  templateUrl: 'thank-you.component.html'
})

export class ThankYouComponent extends AppBaseComponent implements OnInit {
  constructor(injector: Injector) {
    super(injector)
  }

  onClickToBackHome(){
    this.redirect('/home');
  }
  ngOnInit() { }
}
