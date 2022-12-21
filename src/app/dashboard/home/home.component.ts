import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { LoadingService } from 'src/app/services/loading/loading-service.service';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';
import { FileService } from '../../services/file.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
file : any;
filename = new FormControl(null);

isUploadRoute = false;

private unsub$ = new Subject<void>();

  constructor(
    private _fileService : FileService,
    private _userService : UserService,
    private snackBarService: SnackBarService,
    private loadingService: LoadingService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if( this.router.url === '/home/upload'){
      this.isUploadRoute = true;
    }
  }

  fileChanged( file : any ){
    this.file = file;
  }

  onSubmit(){

    const fd = new FormData();
    const user : any = this._userService.getLoggedUser();
    
    fd.append('file', this.file);

    if( this.isUploadRoute ){
      if(!this.filename.valid){
        this.snackBarService.showError({
          message: "Ingrese el nombre del archivo",
          action: "OK",
          config: {
            duration: 3000
          }
        });
        return;
      }

      this.loadingService.startLoading();

      this._fileService.upload(fd, user?.user?.username, this.filename.value).pipe(
        takeUntil(this.unsub$),
        finalize(() => this.loadingService.stopLoading())
      ).subscribe( data => {
        console.log(data)
        this.snackBarService.showSuccess({
          message: "Transacción ejecutada",
          action: "OK",
          config: {
            duration: 3000
          }
        });
      }, err =>{
        console.log(err)
        this.snackBarService.showError({
          message: err?.error?.msg ?? 'Algo salió mal, vuelva a intentar.',
          action: "OK",
          config: {
            duration: 3000
          }
        });
      });

    }else{
      this.loadingService.startLoading();
      this._fileService.validate(fd, user?.user?.username).pipe(
        takeUntil(this.unsub$),
        finalize(() => this.loadingService.stopLoading())
      ).subscribe( data => {
        console.log(data)
        this.snackBarService.showSuccess({
          message: "El archivo ingresado es válido",
          action: "OK",
          config: {
            duration: 3000
          }
        });
      }, err =>{
        console.log(err)
        this.snackBarService.showError({
          message: err?.error?.msg ?? 'Algo salió mal, vuelva a intentar.',
          action: "OK",
          config: {
            duration: 3000
          }
        });
      });
    }

  }

  ngOnDestroy(): void {
    this.unsub$.next();
    this.unsub$.complete();
  }

}

