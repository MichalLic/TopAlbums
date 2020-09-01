import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: './content/content.module#ContentModule'
  },
  {
    path: '',
    redirectTo: 'app/albums',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'app/albums',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
