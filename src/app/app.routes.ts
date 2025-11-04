import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title:'home'
  },
  {
    path: 'home',
    redirectTo: '',
    title: 'home'
  },
  {
    path: 'about',
    component:AboutComponent,
    title: 'about'
  },
  {
    path: 'portfolio',
    component:PortfolioComponent,
    title: 'portfolio'
  },
  {
    path: 'contact',
    component:ContactComponent,
    title: 'contact'
  },
  {
    path: 'notFound',
    component:NotFoundComponent
  },
  {
    path:'**',
    redirectTo:'notFound',
    title: 'notFound'
  }
];
