import {Directive, HostListener} from '@angular/core';

@Directive({
  selector: '[appNavbarClose]',
  standalone: true
})
export class NavbarCloseDirective {
  @HostListener('click', ['$event'])
  onClick(): void {
    const navbarToggle: HTMLElement = document.querySelector('.navbar-toggler') as HTMLElement;
    const navbarCollapse: HTMLElement = document.querySelector('.navbar-collapse') as HTMLElement;
    navbarCollapse.classList.remove('show');
    navbarToggle.classList.add('collapsed');
  }
}
