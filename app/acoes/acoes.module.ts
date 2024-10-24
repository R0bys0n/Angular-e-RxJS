import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { PoTemplatesModule } from '@po-ui/ng-templates';
import { AcoesRoutingModule } from './acoes-routing.module';
import { AcoesComponent } from './acoes.component';
import { CardAcoesComponent } from './card-acoes/card-acoes.component';

import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AcoesComponent, CardAcoesComponent],
  imports: [
    CommonModule,
    AcoesRoutingModule,
    SharedModule,
    PoTemplatesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AcoesModule { }
