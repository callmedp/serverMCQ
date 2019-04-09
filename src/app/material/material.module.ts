import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import{MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';

const allModules= [
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
   
    MatInputModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    ScrollDispatchModule,
    MatDialogModule,
    MatTabsModule
    
];
@NgModule({
  
  imports:[allModules],
  exports : [allModules]
})
export class MaterialModule { }
