import {Injectable} from '@angular/core';

@Injectable()
export class BreadcrumbService {
  title = '';

  constructor() {}

  getTitle() {
    return this.title;
  }

  setTitle(title): void {
    this.title = title;
  }
}
