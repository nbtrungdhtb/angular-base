export class Helpers {
    optimize_params(value: any): any {
        Object.keys(value).forEach(function(key) {
            if ( value[key] === null || value[key] === undefined ) {
                delete value[key];
            }
            if (value[key] === 1 || value[key] === true) {
                value[key] = '1';
            }
            if (value[key] === 0 || value[key] === false) {
                value[key] = '0';
            }
        });
        return value;
    }
    notifySweet2(): void {

    }
}
