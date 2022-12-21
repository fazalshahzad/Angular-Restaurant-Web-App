import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-module/main-components/Home/home/home.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) },
  { path: 'MainModule', loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) },
   { path: 'ManagementModule', loadChildren: () => import('./management-module/management-module.module').then(m => m.ManagementModuleModule) },
  {path:'search/:searchTerm',component:HomeComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
