import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  inputMenu = true;

  onClickInputMenu(): void {
    this.inputMenu = !this.inputMenu;
  }
}
