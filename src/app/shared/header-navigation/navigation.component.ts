import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';
import {TranslateService} from '@ngx-translate/core';
import {AuthenticationService} from '../../authentication/authentication.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
    @Output() toggleSidebar = new EventEmitter<void>();

    public config: PerfectScrollbarConfigInterface = {};

    // This is for Notifications
    notifications: Object[] = [
        {
            btn: 'btn-danger',
            icon: 'ti-link',
            title: 'Luanch Admin',
            subject: 'Just see the my new admin!',
            time: '9:30 AM'
        },
        {
            btn: 'btn-success',
            icon: 'ti-calendar',
            title: 'Event today',
            subject: 'Just a reminder that you have event',
            time: '9:10 AM'
        },
        {
            btn: 'btn-info',
            icon: 'ti-settings',
            title: 'Settings',
            subject: 'You can customize this template as you want',
            time: '9:08 AM'
        },
        {
            btn: 'btn-primary',
            icon: 'ti-user',
            title: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
        }
    ];

    // This is for Mymessages
    mymessages: Object[] = [
        {
            useravatar: 'assets/images/users/1.jpg',
            status: 'online',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:30 AM'
        },
        {
            useravatar: 'assets/images/users/2.jpg',
            status: 'busy',
            from: 'Sonu Nigam',
            subject: 'I have sung a song! See you at',
            time: '9:10 AM'
        },
        {
            useravatar: 'assets/images/users/2.jpg',
            status: 'away',
            from: 'Arijit Sinh',
            subject: 'I am a singer!',
            time: '9:08 AM'
        },
        {
            useravatar: 'assets/images/users/4.jpg',
            status: 'offline',
            from: 'Pavan kumar',
            subject: 'Just see the my admin!',
            time: '9:00 AM'
        }
    ];

    constructor(
        private modalService: NgbModal,
        private translate: TranslateService,
        private authenticationService: AuthenticationService
    ) {
    }

    ngAfterViewInit() {
    }

    useLanguage(language: string) {
        this.translate.use(language);
        const elements = document.querySelectorAll('.btn_flag_language');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add('d-none');
        }
        document.querySelector('#item_language_' + language).classList.remove('d-none');
    }

    logout() {
        this.authenticationService.logout();
        window.location.reload();
    }
}
