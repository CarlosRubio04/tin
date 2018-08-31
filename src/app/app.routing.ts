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
    { path: 'inicio',             component: HomeComponent },
    { path: 'inversion', component: BenefitsComponent },
    { path: 'beneficios', component: AdvantageComponent },
    { path: 'estructura', component: StructureComponent},
    { path: 'contacto', component: ContactComponent},
    { path: '', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
