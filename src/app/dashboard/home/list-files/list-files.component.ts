import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.scss']
})
export class ListFilesComponent implements OnInit {

  files$: Observable<{url: string, name:string}[]>;

  constructor(
    private readonly homeService: HomeService
  ) {
    this.files$ = of([]);
   }

  ngOnInit(): void {
    this.files$ = this.homeService.getFiles();
  }

}
