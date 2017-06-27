import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{title}}</h1>
		<nav>
		<a routerLink="/panel" routerLinkActive="active">Panel</a>
		<a routerLink="/users" routerLinkActive="active">Użytkownicy</a>
		</nav>
		<router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css'],
})

export class AppComponent {
	title = 'Aplikacja zaliczeniowa';
}