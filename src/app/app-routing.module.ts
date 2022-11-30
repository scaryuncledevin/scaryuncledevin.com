import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'google-cache',
    loadChildren: () => import('./pages/google-cache/google-cache.module').then( m => m.GoogleCachePageModule)
  },
  {
    path: 'character-sum',
    loadChildren: () => import('./pages/character-sum/character-sum.module').then( m => m.CharacterSumPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error/error.module').then( m => m.ErrorPageModule),
    data: {
      code: 404,
      title: 'Page Not Found',
      message: 'The page you were looking for does not exist.'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
