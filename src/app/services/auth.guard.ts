import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  
  constructor( 
    private _userService : UserService,
    private _router : Router
    ){}

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this._userService.getLoggedUser();
      console.log(user)
      if( user ){
        const exp = new Date( user.exp * 1000);
        const now = new Date();
        
        if( exp > now ) return true;
    
      }

      this._router.navigate(['login']);
      return false;

  }

}
