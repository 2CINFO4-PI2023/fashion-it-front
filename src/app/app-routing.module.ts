import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import {RegisterComponent} from "./views/register/register.component"
import { LoginComponent } from "./views/login/login.component";
import { UserListComponent } from "./views/user-list/user-list.component";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {CategorieComponent} from "./views/categorie/categorie.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "userlist",
    component: UserListComponent,
  },{
    path: "categories",
    component: CategorieComponent,
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadChildren: () => import('./pages/examples/dashboard/dashboard.module').then(x => x.DashboardModule)
      },
      {
        path: "components",
        loadChildren: () => import('./pages/examples/components/components.module').then(x => x.ComponentsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      scrollOffset: [0, 64]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
