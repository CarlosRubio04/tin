import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Headers, Response } from '@angular/http';
import { MainService } from '../services/main.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    lead = {};
    rForm: FormGroup;
    post: any;
    nombre: string = '';
    tel: number;
    cel: number;
    email: string = '';
    ciudad: string = '';
    mensaje: string = '';

    constructor(private mainService: MainService) {
        this.lead = {
            nombre: this.nombre,
            tel: this.tel,
            cel: this.cel,
            email: this.email,
            ciudad: this.ciudad,
            mensaje: this.mensaje
        }
    }

    public sendData() {
        console.log(this.lead);
        this.mainService.sendLead(this.lead);
    }

    ngOnInit() {}
}
