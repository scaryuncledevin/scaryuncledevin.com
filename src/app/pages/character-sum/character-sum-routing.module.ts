import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterSumPage } from './character-sum.page';

const routes: Routes = [
  {
    path: '',
    component: CharacterSumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharacterSumPageRoutingModule {}
