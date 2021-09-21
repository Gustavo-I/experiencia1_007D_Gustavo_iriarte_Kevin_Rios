import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaseTabsPageRoutingModule } from './pase-tabs-routing.module';

import { PaseTabsPage } from './pase-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaseTabsPageRoutingModule
  ],
  declarations: [PaseTabsPage]
})
export class PaseTabsPageModule {}
