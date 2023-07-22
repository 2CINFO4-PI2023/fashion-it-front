import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import {ToastrModule} from "ngx-toastr";
import {UserdashComponent} from "./userpages/userdash/userdash.component";
import {UsercenterComponent} from "./pages/usercenter/usercenter.component";
import {ProductCardComponent} from "./userpages/product-card/product-card.component";
import {AddproductComponent} from "./userpages/addproduct/addproduct.component";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {AllproductsComponent} from "./userpages/allproducts/allproducts.component";
import {ConfirmationDialogComponent} from "./components/confirmation-dialog/confirmation-dialog.component";
import {CheckoutComponent} from "./userpages/checkout/checkout.component";
import {StripeModule} from "stripe-angular";
import {StripeComponent} from "./userpages/stripe/stripe.component";
import {UpdateProductModalComponent} from "./components/update-product-modal/update-product-modal.component";
import { PublicationComponent } from './pages/extra/publication/publication.component';
import { CreatePublicationComponent } from './pages/extra/create-publication/create-publication.component';
import { UpdatePublicationComponent } from './pages/extra/update-publication/update-publication.component';

//PrimeNG


@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    UserdashComponent,
    UsercenterComponent,
    ProductCardComponent,
    AddproductComponent,
    AllproductsComponent,
    ConfirmationDialogComponent,
    CheckoutComponent,
    StripeComponent,
    UpdateProductModalComponent,
    PublicationComponent,
    CreatePublicationComponent,
    UpdatePublicationComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    StripeModule.forRoot('sk_test_51NQV6mI1OqZaz5EKRStYZb5vbq7rFmbi86Y8ZISfvbKrGju7Z5kTf2szqJK3HFdr93IRzPj3w0uVovGb4oNzy1yq00y0wKwtWr')


  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
