import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template: `
        <md-toolbar color="primary">{{title}}
        </md-toolbar>
        <nav md-tab-nav-bar>
            <a md-tab-link routerLink="/dashboard" routerLinkActive #rla1="routerLinkActive" [active]="rla1.isActive">Dashboard</a>
            <a md-tab-link routerLink="/heroes"  routerLinkActive #rla2="routerLinkActive" [active]="rla2.isActive">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'Tour of Heroes';
}