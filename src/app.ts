import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `
    <h1>Hello {{world}}!</h1>
    `
})
export class App {
    world: string = 'test';
}
