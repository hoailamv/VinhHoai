import { AfterViewInit, Component, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppBaseComponent } from '../shared/base.component';
import { CreateOrEditCustomerDto } from '../shared/service/customer/models';
import { CustomerService } from '../shared/service/customer/service';

@Component({
  templateUrl: 'contact.component.html',
  styleUrls: [
    'contact.component.css',
    'aos.css',
    'style.css',
    'magnific-popup.css'
  ],
})

export class ContactComponent extends AppBaseComponent implements OnInit, AfterViewInit {
  constructor(injector: Injector, public dialog: MatDialog,
    private readonly _customerService: CustomerService) {
    super(injector);
  }
  ngAfterViewInit(): void {

  }
  public isCreate: boolean = true;
  public vm: CreateOrEditCustomerDto = new CreateOrEditCustomerDto();
  ngOnInit() { }


  clickToSave() {
    if (this.vm.name || this.vm.email) {
      this._customerService.saveByInput(this.vm).subscribe(() => {
        this.redirect('/payment/thank-you')
      })
    }
  }
}
