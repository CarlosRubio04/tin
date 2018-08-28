import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdvantageComponent } from './advantage/advantage.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { StructureComponent } from './structure/structure.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
    { path: 'home',             component: HomeComponent },
    { path: 'benefits', component: BenefitsComponent },
    { path: 'advantage', component: AdvantageComponent },
    { path: 'structure', component: StructureComponent},
    { path: 'contact', component: ContactComponent},
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
