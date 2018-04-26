import { Injectable } from '@angular/core';

@Injectable()
export class FooterService {

  public isVisible: boolean = false;

  constructor() {
    this.isVisible = true;
  }

  public show():boolean {
    return this.isVisible = true;
  }

  public hide(): boolean {
    return this.isVisible = false;
  }

}
