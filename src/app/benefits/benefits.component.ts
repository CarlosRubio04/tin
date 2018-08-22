import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
    test: Date = new Date();

    constructor() { }

    ngOnInit() {}
}
