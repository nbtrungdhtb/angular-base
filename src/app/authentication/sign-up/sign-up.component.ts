import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {ValidationService} from '../../shared/control-message/validation.service';
import {NotificationService} from '../../service/notification.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
    formSignUp: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService,
    ) {
        this.createSignUpForm();
    }

    createSignUpForm() {
        this.formSignUp = this.fb.group({
            full_name: [''],
            username: ['', [Validators.required, Validators.minLength(3)]],
            password: ['', [Validators.required, ValidationService.passwordValidator]]
        });
    }

    registerUser() {
        if (this.formSignUp.dirty && this.formSignUp.valid) {
            this.authenticationService.createUser(this.formSignUp.value)
                .subscribe(
                    () => {
                        this.notificationService.notifySuccess('Register successfully');
                    },
                    () => {
                        this.notificationService.notifyError('Something went wrong!');
                    }
                );
        }
    }

}
