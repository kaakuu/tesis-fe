import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../components/home/components/main/main.component';
import { AuthGuard } from '../services/auth.guard';

const routes: Routes = [
	{
		component: MainComponent,
		path: '',
		children: [
			{
				path: '',
				canActivate: [AuthGuard],
				loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
			},
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'main',
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardRoutingModule {}
