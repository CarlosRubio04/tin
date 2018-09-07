import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MainService } from '../services/main.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    rForm: FormGroup;
    post: any;
    nombre: string = '';
    tel: string = '';
    cel: string = '';
    email: string = '';
    ciudad: string = '';
    mensaje: string = '';
    titleAlert: string = 'Completa este campo';

    constructor(private mainService: MainService, private fb: FormBuilder, private modalService: NgbModal) {
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
            'mensaje': [null]
        });

    }

    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }

    public sendData(lead) {
        console.log(lead);
        this.mainService.sendLead(lead);
    }

    ngOnInit() {}
}
