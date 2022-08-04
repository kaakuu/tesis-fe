import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/file.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
file : any;
  constructor(
    private _fileService : FileService,
    private _userService : UserService
  ) { }

  ngOnInit(): void {
  }

  fileChanged( file : any ){
    this.file = file;
  }

  validate(){
    console.log(this.file)
    const fd = new FormData();
    const user : any = this._userService.getLoggedUser();
    
    fd.append('file', this.file);

    this._fileService.validate(fd, user.user.username).subscribe( data => {
      console.log(data)
    }, err => console.log(err))
  }

}
