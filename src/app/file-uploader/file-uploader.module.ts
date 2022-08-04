import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderComponent } from './file-uploader.component';
import { DnDirective } from './dn.directive';



@NgModule({
  declarations: [
    FileUploaderComponent,
    DnDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [ FileUploaderComponent ]
})
export class FileUploaderModule { }
