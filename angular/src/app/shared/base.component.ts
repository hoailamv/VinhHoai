import { ConfirmationService, Confirmation, ToasterService } from '@abp/ng.theme.shared';
import { Injector } from '@angular/core';
import { LocalizationService, ConfigState, ConfigStateService } from '@abp/ng.core';
import { Store } from '@ngxs/store';
import { Router, ActivatedRoute } from '@angular/router';

declare var ftapp;

export class AppBaseComponent {

  public title: string;
  protected readonly toaster: ToasterService;
  protected readonly confirmationService: ConfirmationService;
  protected readonly localizationService: LocalizationService;
  protected readonly router: Router;
  protected readonly store: Store;
  protected readonly config: ConfigStateService;
  protected readonly activedRoute: ActivatedRoute;
  constructor(protected readonly injector: Injector) {
    this.router = injector.get(Router);
    this.toaster = injector.get(ToasterService);
    this.confirmationService = injector.get(ConfirmationService);
    this.localizationService = injector.get(LocalizationService);
    this.store = injector.get(Store);
    this.config = injector.get(ConfigStateService);
    this.activedRoute = injector.get(ActivatedRoute);
  }

  l(key: string): string {
    return this.store.selectSnapshot(ConfigState.getLocalization(key));
  }

  protected redirect(url: string) {
    this.router.navigate([url]);
  }

  protected getParamId(param: string): string {
    const id = this.getQuerystringParam(param);

    if (this.validGuid(id)) return id;

    return null;
  }

  protected getQuerystringParam(param: string): string {
    return this.activedRoute.snapshot.paramMap.get(param);
  }

  protected notifySuccess(message: string) {
    this.toaster.success(message);
  }
  protected notifyWarn(message: string) {
    this.toaster.warn(message);
  }
  protected notifyError(message: string) {
    this.toaster.error(message);
  }

  protected confirmationPopup(message: string, title: string, execute: () => void) {
    this.confirmationService.warn(message, title).subscribe((status: Confirmation.Status) => {
      if (status === Confirmation.Status.confirm) {
        execute();
      }
    });
  }

  protected validGuid(value: string): boolean {
    if (!value) { return false; }
    const pattern = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
    return pattern.test(value);
  }
  protected setBusy() {
    ftapp.setBusy();
  }
  protected clearBusy() {
    ftapp.clearBusy();
  }
  protected getGrantedPolicy(permissname: string): boolean {
    return this.config.getGrantedPolicy(permissname);
  }

  protected renderButtonEdit(isGrandUpdate: boolean): string {
    if (isGrandUpdate) {
      return '<button class="btn btn-sm btn-default waves-effect btn-edit" title="'
        + this.l('Edit') + '"><i class="material-icons">edit</i></button>';
    }
    return '';
  }
}
