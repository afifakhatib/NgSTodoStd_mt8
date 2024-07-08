import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


const ngMat = [
  MatButtonModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatSnackBarModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ngMat
  ],
  exports : [
    ...ngMat
  ]
})
export class MaterialModule { }
