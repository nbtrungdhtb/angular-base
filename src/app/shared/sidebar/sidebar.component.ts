import {Component, OnInit} from '@angular/core';
import {ROUTES} from './menu-items';


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    showMenu = '';
    showSubMenu = '';
    public sidebarNavItems: any[];

    // this is for the open close
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }

    addActiveClass(element: any) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        } else {
            this.showSubMenu = element;
        }
    }

    // End open close
    ngOnInit() {
        this.sidebarNavItems = ROUTES.filter(sidebarNavItem => sidebarNavItem);
    }
}
