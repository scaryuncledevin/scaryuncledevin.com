import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharacterSumPageRoutingModule } from './character-sum-routing.module';

import { CharacterSumPage } from './character-sum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharacterSumPageRoutingModule
  ],
  declarations: [CharacterSumPage]
})
export class CharacterSumPageModule {}
