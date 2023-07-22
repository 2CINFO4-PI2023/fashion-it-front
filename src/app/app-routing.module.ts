import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {UserdashComponent} from "./userpages/userdash/userdash.component";
import {AppSideLoginComponent} from "./pages/authentication/login/login.component";
import {AppSideRegisterComponent} from "./pages/authentication/register/register.component";
import {UsercenterComponent} from "./pages/usercenter/usercenter.component";
import {AllproductsComponent} from "./userpages/allproducts/allproducts.component";
import {CheckoutComponent} from "./userpages/checkout/checkout.component";
import { PublicationComponent } from './pages/extra/publication/publication.component';
import { CreatePublicationComponent } from './pages/extra/create-publication/create-publication.component';
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: '',
component: FullComponent,
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: AppSideRegisterComponent,
    pathMatch: 'full',
  },
  {
    path: 'userlanding',
    component: AppSideLoginComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      {
        path: 'dashboard',
        component: UserdashComponent, // Add UserdashComponent to /userlanding/dashboard
      },
      {
        path:'usercenter',
        component: UsercenterComponent
      },
      {
        path:'allprod',
        component: AllproductsComponent
      },
      {
        path:'checkout',
        component: CheckoutComponent
      }
      // Add other components here as needed
    ],
  },
  {
    path: 'authentication',
    component: BlankComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
