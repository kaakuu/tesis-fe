import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListFilesComponent } from './list-files/list-files.component';

const routes: Routes = [
  {
    path: 'files',
    component: ListFilesComponent
  },
  {
    path: 'upload',
    component: HomeComponent
  },
  {
    path: 'verify',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
