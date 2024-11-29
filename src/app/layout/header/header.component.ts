import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private router: Router) {}

  activatedRoute!: string;

  imgLogo: string = 'assets/img/Logo.png';

  getActivateRoute(ruta: string) {
    this.activatedRoute = this.router.url;
    return this.activatedRoute === ruta;
  }
}
