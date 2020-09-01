import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const routes = [{
  path: '',
  children: [
    {
      path: 'albums',
      loadChildren: './albums/albums.module#AlbumsModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ContentRoutingModule {
}
