import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MainService } from './services/main.service';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { NavbarComponent } from './shared/navbar/navbar.component';
import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild,
    state
} from '@angular/animations';

import { GoogleAnalyticsEventsService } from './services/ga.service';
declare let ga: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    animations: [
        trigger('loaderAnimation', [
            state('show', style({
                opacity: 1,
                display: 'flex',
                transformOrigin: 'center',
            })),
            state('hide', style({
                opacity: 0,
                display: 'none',
                transformOrigin: 'center',
            })),
            transition('show => hide', animate('700ms ease-out')),
            transition('hide => show', animate('100ms ease-in'))
        ]),
    ]
})
export class AppComponent implements OnInit {
    private _router: Subscription;
    @ViewChild(NavbarComponent) navbar: NavbarComponent;
    loader = 'show';
    cta: boolean = false;
    caracteristics: boolean = false;

    rForm: FormGroup;
    post: any;
    nombre: string = '';
    tel: string = '';
    cel: string = '';
    email: string = '';
    ciudad: string = '';
    mensaje: string = '';
    titleAlert: string = 'Completa este campo';

    partnerId: string;

    constructor(private mainService: MainService, 
        private fb: FormBuilder, 
        private renderer : Renderer,
        private route: ActivatedRoute,
        private router: Router, @Inject(DOCUMENT,) 
        private document: any, 
        private element : ElementRef, 
        public locationx: Location,
        public googleAnalyticsEventsService: GoogleAnalyticsEventsService) {

        this.partnerId = this.route.snapshot.queryParams['partnerId'] || '1';

        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                ga('set', 'page', event.urlAfterRedirects);
                ga('send', 'pageview', {
                    'page': location.pathname + location.search + location.hash,
                    'location': location.href,
                });
            }
        });

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
            'politica': [null, Validators.compose([
                Validators.required
            ])],
            'mensaje': [null]
        });
    }
    ngOnInit() {
        var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }else{
                window.document.activeElement.scrollTop = 0;
            }
            this.navbar.sidebarClose();

            setTimeout(() => {
                this.loader = 'hide';
            }, 700);

        });

        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    }
    removeCta() {
        var titlee = this.locationx.prepareExternalUrl(this.locationx.path());
        titlee = titlee.slice( 1 );
        if(titlee === '' || titlee === 'home'){
            return false;
        }
        else {
            return true;
        }
    }
    public sendData(lead) {
        lead.partnerId = this.partnerId;
        this.mainService.sendLead(lead);
    }
    showCta() {
        this.cta = !this.cta
    }
    showCaracteristics() {
        this.caracteristics = !this.caracteristics
    }
}
