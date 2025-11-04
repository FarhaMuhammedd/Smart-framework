import { Component, HostBinding, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  myPadding = 'py-3';
  @HostListener('window:scroll')
  changeColor(){
    this.myPadding = 'py-0'
  }
}
