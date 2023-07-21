import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {BasketService} from "../../../services/basket.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  showFiller = false;

  constructor(public dialog: MatDialog, private authservice:AuthService,
              private router: Router,
              private basketService: BasketService
  ) {}

  logout(){
    this.authservice.logout();

  }
  shoppingCard(){

  }
  basketItemsCount(): number {
    return this.basketService.getBasketItems().length;
  }
}
