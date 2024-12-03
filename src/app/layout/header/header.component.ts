import {Component, inject} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {Router} from "@angular/router";
import {NavbarCloseDirective} from "../../shared/directive/navbar-close.directive";

@Component({
    selector: 'app-header',
  imports: [
    MatIcon,
    MatButtonModule,
    NavbarCloseDirective
  ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _router: Router = inject(Router);

  scrollToTop(): void {
    window.scrollTo(0, 0);
    this._router.navigate([], {replaceUrl: true}).then();
  }
}
