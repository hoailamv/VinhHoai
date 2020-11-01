import { ApplicationLayoutComponent } from '@abp/ng.theme.basic';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './shared/layout/application-layout/app-layout.component';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
//   },
//   {
//     path: 'account',
//     loadChildren: () =>
//       import('@abp/ng.account').then((m) => m.AccountModule.forLazy({ redirectUrl: '/' })),
//   },
//   {
//     path: 'identity',
//     loadChildren: () => import('@abp/ng.identity').then((m) => m.IdentityModule.forLazy()),
//   },
//   {
//     path: 'tenant-management',
//     loadChildren: () =>
//       import('@abp/ng.tenant-management').then((m) => m.TenantManagementModule.forLazy()),
//   },
//   {
//     path: 'setting-management',
//     loadChildren: () =>
//       import('@abp/ng.setting-management').then((m) => m.SettingManagementModule.forLazy()),
//   },
// ];

const routes1: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes1)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
