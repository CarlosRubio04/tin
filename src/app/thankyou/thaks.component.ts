import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-thaks',
    templateUrl: './thaks.component.html',
    styleUrls: ['./thaks.component.scss']
})
export class ThaksComponent implements OnInit {
    test: Date = new Date();

    constructor() { }

    ngOnInit() {}
}
