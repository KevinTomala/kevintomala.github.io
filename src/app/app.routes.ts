import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'portfolio', component: PortfolioComponent }, // 👈 Nueva ruta
  { path: 'contact', component: ContactComponent },     // 👈 Nueva ruta
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' },
];
