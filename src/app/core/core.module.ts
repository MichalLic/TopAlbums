import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {SearchPipe} from '../shared/pipe/search-pipe';

@NgModule({
  declarations: [SearchPipe],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    SearchPipe,
  ],
})

export class CoreModule {
}
