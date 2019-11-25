import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: ''},
    {path: '/user', title: 'User Profile', icon: 'pe-7s-user', class: ''},
    {path: '/dev', title: 'Dev-Extreme', icon: 'pe-7s-user', class: ''},
    {path: '/prime', title: 'PrimeNg', icon: 'pe-7s-user', class: ''},
    {path: '/ag', title: 'Ag-grid', icon: 'pe-7s-user', class: ''},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
