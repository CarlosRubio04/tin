import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { BenefitsComponent } from './benefits/benefits.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'benefits', component: BenefitsComponent },
    { path: 'advantage', component: AdvantageComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
