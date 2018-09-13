import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
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

    partnerId: string = '1';

    constructor(private mainService: MainService,
                private fb: FormBuilder,
                private modalService: NgbModal,
                private route: ActivatedRoute) {

        this.partnerId = this.route.snapshot.queryParams['partnerId'] ||  '1';

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
            'tel': [null],
            'email': [null, Validators.compose([
                Validators.required,
                Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ])],
            'ciudad': [null, Validators.compose([
                Validators.required
            ])],
            'politica': [null, Validators.compose([
                Validators.required
            ])],
            'mensaje': [null]
        });

    }

    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }

    public sendData(lead) {
        lead.partnerId = this.partnerId;
        this.mainService.sendLead(lead);
    }

   scroll() {
       window.scrollTo(0, document.body.scrollHeight);
   }

    ngOnInit() {}
}
