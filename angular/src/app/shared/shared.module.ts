import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeBasicModule } from '@abp/ng.theme.basic';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { AppTopBarComponent } from './layout/top-bar/app-top-bar.component';
import { AppFooterComponent } from './layout/footer/app-footer.component';
import { AppLayoutComponent } from './layout/application-layout/app-layout.component';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  declarations: [
    AppFooterComponent,
    AppTopBarComponent,
    AppLayoutComponent
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    MatIconModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    ThemeBasicModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    AppFooterComponent,
    AppTopBarComponent,
    AppLayoutComponent,
    MatIconModule
  ],
  providers: []
})
export class SharedModule { }
