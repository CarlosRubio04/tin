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
                Validators.maxLength(240)
            ])],
            'cel': [null, Validators.compose([
                Validators.required,
                Validators.minLength(7),
                Validators.maxLength(7)
            ])],
            'tel': [null],
            'email': [null, Validators.compose([
                Validators.required,
                Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ])],
            'ciudad': [null, Validators.compose([
                Validators.required
            ])],
            'ocupacion': [null],
            'politica': [null, Validators.compose([
                Validators.required
            ])],
            'mensaje': [null]
        });
    }

    public sendData(lead) {
        console.log(lead);
        this.mainService.sendLead(lead);
    }

    ngOnInit() {}
}
