import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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

    constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {}
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
        // this.renderer.listenGlobal('window', 'scroll', (event) => {
        //     const number = window.scrollY;
        //     if (number > 150 || window.pageYOffset > 150) {
        //         // add logic
        //         navbar.classList.remove('navbar-transparent');
        //     } else {
        //         // remove logic
        //         navbar.classList.add('navbar-transparent');
        //     }
        // });
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
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice( 1 );
        if(titlee === '' || titlee === 'home'){
            return false;
        }
        else {
            return true;
        }
    }

    
    showCta() {
        this.cta = !this.cta
    }
    showCaracteristics() {
        this.caracteristics = !this.caracteristics
    }
}
