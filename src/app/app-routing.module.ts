import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { GestionLivraisonComponent } from "./gestion-livraison/gestion-livraison.component";
import { AddLivreurComponent } from "./gestion-livraison/add-livreur/add-livreur.component";
import { GestionCommandeComponent } from "./gestion-commande/gestion-commande.component";
import { AddCommandeComponent } from "./add-commande/add-commande.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/examples/dashboard/dashboard.module').then(x => x.DashboardModule)
      },
      {
        path: "components",
        loadChildren: () => import('./pages/examples/components/components.module').then(x=>x.ComponentsPageModule)
      },
      {
        path: "forms",
        loadChildren: () => import('./pages/examples/forms/forms.module').then(x=>x.Forms)
      },
      {
        path: "tables",
        loadChildren: () => import('./pages/examples/tables/tables.module').then(x=>x.TablesModule)
      },
      {
        path: "maps",
        loadChildren: () => import('./pages/examples/maps/maps.module').then(x=>x.MapsModule)
      },
      {
        path: "widgets",
        loadChildren: () => import('./pages/examples/widgets/widgets.module').then(x=>x.WidgetsModule)
      },
      {
        path: "charts",
        loadChildren: () => import('./pages/examples/charts/charts.module').then(x=>x.ChartsModule)
      },
      {
        path: "calendar",
        loadChildren: () => import('./pages/examples/calendar/calendar.module').then(x=>x.CalendarModulee)
      },
      {
        path: "",
        loadChildren: () => import('./pages/examples/pages/user/user-profile.module').then(x=>x.UserModule)
      },
      {
        path: "",
        loadChildren: () => import('./pages/examples/pages/timeline/timeline.module').then(x=>x.TimelineModule)
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "pages",
        redirectTo: "GestionLivraisonComponent"

      }
    ]
  },
  {
    path: "",
    component: GestionLivraisonComponent,
    children: [
      {
        path: "pages",
        loadChildren: () => import('./pages/examples/pages/rtl/rtl.module').then(x=>x.RtlModule)
      }
    ]
  },
  {
    path: "commande",
    redirectTo: "GestionCommandeComponent"
  },
  {
    path: "**",
    redirectTo: "dashboard"
  },
  {
    path: "livreur",
    redirectTo: "GestionLivraisonComponent"
  }
  
];

const routs:Routes =[{path:"lvreur",component:GestionLivraisonComponent},
{path:"ajouter",component:AddLivreurComponent}, {path: 'gestion-commande', component: GestionCommandeComponent}
,{path: 'ajoutercommande', component: AddCommandeComponent}
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,RouterModule.forRoot(routs),
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
