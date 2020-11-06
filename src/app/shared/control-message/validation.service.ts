import {AbstractControl} from '@angular/forms';

export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
        const config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`
        };
        return config[validatorName];
    }

    static creditCardValidator(control: AbstractControl): {[key: string]: boolean} {
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        } else {
            return {'invalidCreditCard': true};
        }
    }

    static emailValidator(control: AbstractControl): { [key: string]: boolean } {
        // tslint:disable-next-line:max-line-length
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return {'invalidEmailAddress': true};
        }
    }

    static passwordValidator(control: AbstractControl): { [key: string]: boolean } {
        // {3,100}           - Assert password is between 3 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{3,100}$/)) {
            return null;
        } else {
            return {'invalidPassword': true};
        }
    }

    static userNameValidator(control: AbstractControl): { [key: string]: boolean } {
        if (control.value.match(/^[a-zA-Z0-9_]{6,}[a-zA-Z]+[0-9]*$/)) {
            return null;
        } else {
            return {'invalidUserName': true};
        }
    }
}
