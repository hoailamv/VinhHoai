import { Component, Injector, OnInit } from '@angular/core';
import { AppBaseComponent } from '../shared/base.component';
import { AuthService } from '@abp/ng.core';
@Component({
  templateUrl: 'login.component.html',
  styleUrls: [
    'css/aos.css',
    'css/login_register-css.css',
    'css/style.css',
    'css/util.css',
  ]
})

export class LoginComponent extends AppBaseComponent {
  username: string;
  password: string;

  constructor(protected readonly injector: Injector,
    private readonly authService: AuthService) {
    super(injector);
  }

  login() {
    this.setBusy();
    this.authService.login(this.username, this.password).subscribe(result => {
      this.notifySuccess(this.l('::LoginSuccessfully'));
    },
      () => {
        this.clearBusy();
        this.notifyError(this.l('::LoginUnsuccessfully'));
      },
      () => {
        this.clearBusy();
      })
  }
}
