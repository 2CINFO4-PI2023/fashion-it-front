import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ModalModule } from "ngx-bootstrap/modal";
import { DxVectorMapModule } from "devextreme-angular";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { VectorMapComponent1 } from "./vector-map/vector-map.component";
import { PictureUploadComponent } from "./picture-upload/picture-upload.component";
import { AuthNavbarComponent } from "./auth-navbar/auth-navbar.component";
import { RtlNavbarComponent } from "./rtl-navbar/rtl-navbar.component";
import { RtlSidebarComponent } from "./rtl-sidebar/rtl-sidebar.component";
import { FixedPluginComponent } from "./fixed-plugin/fixed-plugin.component";
import { UserLoginComponent } from './user-login/user-login.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    JwBootstrapSwitchNg2Module,
    DxVectorMapModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CommonModule, 
    BrowserModule, 
    ReactiveFormsModule
  ],
  declarations: [
    FooterComponent,
    VectorMapComponent1,
    NavbarComponent,
    SidebarComponent,
    PictureUploadComponent,
    AuthNavbarComponent,
    RtlNavbarComponent,
    RtlSidebarComponent,
    FixedPluginComponent,
    UserLoginComponent,
  ],
  exports: [
    FooterComponent,
    VectorMapComponent1,
    NavbarComponent,
    SidebarComponent,
    PictureUploadComponent,
    AuthNavbarComponent,
    RtlNavbarComponent,
    RtlSidebarComponent,
    FixedPluginComponent
  ]
})
export class ComponentsModule {}
