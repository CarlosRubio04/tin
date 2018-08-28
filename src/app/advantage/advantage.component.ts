import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-advantage',
    templateUrl: './advantage.component.html',
    styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
    test: Date = new Date();

    constructor() { }

    ngOnInit() {}
}
