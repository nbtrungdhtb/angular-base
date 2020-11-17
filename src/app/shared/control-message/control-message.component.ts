import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from '@angular/forms';
import {ValidationService} from './validation.service';


@Component({
    selector: 'app-control-message',
    templateUrl: './control-message.component.html'
})


export class ControlMessageComponent {

    @Input() control: AbstractControl;

    constructor() {}

    get errorMessage() {
        for (const propertyName in this.control.errors) {
            if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
            }
        }
        return null;
    }
}
