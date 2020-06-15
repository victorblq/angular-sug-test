import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatRoutingModule } from './cat-routing.module';
import { CatComponent } from './cat.component';
import { CatListComponent } from './cat-list/cat-list.component';
import { CatFormComponent } from './cat-form/cat-form.component';
import {FormsModule} from '@angular/forms';
import {AppHighlightCatDirective} from '../directives/app-highlight-cat.directive';
import { CatImageComponent } from './cat-image/cat-image.component';


@NgModule({
  declarations: [
    CatComponent,
    CatListComponent,
    CatFormComponent,
    AppHighlightCatDirective,
    CatImageComponent
  ],
  imports: [
    CommonModule,
    CatRoutingModule,
    FormsModule
  ]
})
export class CatModule { }
