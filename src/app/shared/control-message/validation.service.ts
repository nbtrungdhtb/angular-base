import {AbstractControl} from '@angular/forms';

export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any, filedName?: string) {
        const config = {
            'required': `Please enter filed ${filedName}`,
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Password must be at least 3 characters long, and contain a number.',
            'minlength': `Minimum length ${validatorValue.requiredLength}`,
            'invalidSpecialCharacters': `The ${filedName} cannot is special characters`
        };
        return config[validatorName];
    }

    static emailValidator(control: AbstractControl): { [key: string]: boolean } {
        return control.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/) ? null : {'invalidEmailAddress': true};
    }

    static passwordValidator(control: AbstractControl): { [key: string]: boolean } {
        return control.value.match(/^[a-zA-Z0-9!@#$%^&*]{3,100}$/) ? null : {'invalidPassword': true};
    }

    static specialCharacters(control: AbstractControl): {[key: string]: boolean} {
        return control.value.match(/^[a-zA-Z0-9!@#$%^&*)]+$/g) ? null : {'invalidSpecialCharacters': true};
    }

    static userNameValidator(control: AbstractControl): { [key: string]: boolean } {
        return control.value.match(/^[a-zA-Z0-9_]{6,}[a-zA-Z]+[0-9]*$/) ? null : {'invalidUserName': true};
    }
}
