import { ErrorHandler, Injectable } from '@angular/core';
import * as Sentry from '@sentry/browser';

import { environment } from '../../environments/environment';

Sentry.init({
    dsn: environment['sentry_dsn']
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
    constructor() {}
    handleError(error) {
        Sentry.captureException(error.originalError || error);
        throw error;
    }
}
