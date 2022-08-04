import {
  Directive,
  Output,
  EventEmitter,
  HostBinding,
  HostListener
} from '@angular/core';

@Directive({
  selector: '[appDn]'
})
export class DnDirective {

  @HostBinding('class.fileover') fileOver: boolean;
  @HostBinding('class.containerOver') containerOver: boolean;
  @Output() fileDropped = new EventEmitter<any>();

  constructor(){
    this.fileOver = false;
    this.containerOver = false;
  }

  // Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    this.containerOver = true;
  }

  // Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.containerOver = false;
  }

  // Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt : any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.containerOver = false;
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  } 

}
