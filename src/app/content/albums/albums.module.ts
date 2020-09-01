import {NgModule} from '@angular/core';

import {AlbumsRoutingModule, routedComponents} from './albums-routing.module';
import {CoreModule} from '../../core/core.module';

@NgModule({
  imports: [
    AlbumsRoutingModule,
    CoreModule
  ],
  declarations: [...routedComponents],
})
export class AlbumsModule {
}
