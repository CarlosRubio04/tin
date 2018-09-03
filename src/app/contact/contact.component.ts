import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    test: Date = new Date();

    rForm: FormGroup;
    post: any;
    nombre: string = '';
    tel: string = '';
    cel: string = '';
    email: string = '';
    ciudad: string = '';
    mensaje: string = '';
    titleAlert: string = 'Completa este campo';

    constructor(private mainService: MainService, private fb: FormBuilder) {
        this.rForm = fb.group({
            'nombre': [null, Validators.compose([
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(140)
            ])],
            'cel': [null, Validators.compose([
                Validators.required,
                Validators.minLength(7),
                Validators.maxLength(7)
            ])],
            'tel': [null, Validators.compose([
                Validators.required,
                Validators.minLength(10),
                Validators.maxLength(10)
            ])],
            'email': [null, Validators.compose([
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ])],
            'ciudad': [null, Validators.compose([
                Validators.required
            ])],
            'ocupacion': [null, Validators.compose([
                Validators.required
            ])],
            'mensaje': [null, Validators.compose([
                Validators.required,
                Validators.minLength(20),
                Validators.maxLength(340),
            ])]
        });
    }

    public sendData(lead) {
        console.log(lead);
        this.mainService.sendLead(lead);
    }

    ngOnInit() {}
}
