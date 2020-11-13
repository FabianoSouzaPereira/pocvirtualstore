import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';

@NgModule({
  declarations: [ NotfoundComponent ],
  imports: [
    SharedModule,
    NotfoundRoutingModule
  ]
})
export class NotfoundModule { }
