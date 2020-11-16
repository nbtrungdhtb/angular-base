import {Injectable} from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class NotificationService {

    notifySuccess(message?: string) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });

         return Toast.fire({
            icon: 'success',
            title: message || 'Success'
        });
    }

    notifyError(message?: string) {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true
        });

        return Toast.fire({
            icon: 'error',
            title: message || 'Please try again'
        });
    }
}
