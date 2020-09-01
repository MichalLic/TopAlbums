import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AlbumsComponent} from './albums.component';
import {AlbumsListComponent} from './albums-list/albums-list.component';
import {AlbumsDetailsComponent} from './albums-details/albums-details.component';

const routes = [{
  path: '',
  component: AlbumsComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    }, {
      path: 'list',
      component: AlbumsListComponent,
    }, {
      path: 'details/:id',
      component: AlbumsDetailsComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class AlbumsRoutingModule {
}

export const routedComponents = [
  AlbumsComponent,
  AlbumsListComponent,
  AlbumsDetailsComponent
];
