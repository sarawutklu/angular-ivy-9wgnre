import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { KoComponent } from './ko/ko.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ko',
    pathMatch: 'full'
  },
  {
    path: 'ko',
    component: KoComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutes { }

