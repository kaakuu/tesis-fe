import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FileUploaderModule } from '../../file-uploader/file-uploader.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { ListFilesComponent } from './list-files/list-files.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    HomeComponent,
    ListFilesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FileUploaderModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
    MatIconModule
  ],
  providers:[SnackBarService, MatSnackBar]
})
export class HomeModule { }
