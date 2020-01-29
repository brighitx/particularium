import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StreamPageRoutingModule } from './stream-routing.module';

import { StreamPage } from './stream.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StreamPageRoutingModule,
    ComponentsModule
  ],
  declarations: [StreamPage]
})
export class StreamPageModule {}
