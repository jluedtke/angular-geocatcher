import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateGeocacheComponent } from './create-geocache/create-geocache.component';



const appRoutes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'create',
    component: CreateGeocacheComponent
  },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
