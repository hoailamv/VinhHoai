import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [SharedModule, ContactRoutingModule,],
  declarations: [ContactComponent],
  exports: [ContactRoutingModule]
})
export class ContactModule { }
