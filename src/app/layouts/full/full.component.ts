import {Component, OnInit, HostListener} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
    selector: 'app-full-layout',
    templateUrl: './full.component.html'
})
export class FullComponent implements OnInit {
    constructor(public router: Router) {
    }

    public isCollapsed = false;

    public innerWidth: any;
    public defaultSidebar: any;
    public showMobileMenu = false;

    options = {
        theme: 'light', // two possible values: light, dark
        dir: 'ltr', // two possible values: ltr, rtl
        layout: 'horizontal', // fixed value. shouldn't be changed.
        sidebartype: 'full', // fixed value. shouldn't be changed.
        sidebarpos: 'absolute', // two possible values: fixed, absolute
        headerpos: 'absolute', // two possible values: fixed, absolute
        boxed: 'boxed', // two possible values: full, boxed
        navbarbg: 'skin3', // six possible values: skin(1/2/3/4/5/6)
        sidebarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
        logobg: 'skin3' // six possible values: skin(1/2/3/4/5/6)
    };

    ngOnInit() {
        if (this.router.url === '/') {
            this.router.navigate(['/']);
        }
        this.defaultSidebar = this.options.sidebartype;
        this.handleSidebar();
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.handleSidebar();
    }

    handleSidebar() {
        this.innerWidth = window.innerWidth;
        switch (this.defaultSidebar) {
            case 'full':
                if (this.innerWidth < 1170) {
                    this.options.sidebartype = 'mini-sidebar';
                } else {
                    this.options.sidebartype = this.defaultSidebar;
                }
                break;
            default:
        }
    }
}
