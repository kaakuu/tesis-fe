import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CustomSnackBarComponent } from '../custom-snack-bar/custom-snack-bar.component';

@NgModule({
	declarations: [MainComponent, FooterComponent, UserProfileComponent, CustomSnackBarComponent],
	imports: [
		CommonModule,
		MatSidenavModule,
		MatButtonModule,
		MatIconModule,
		MatTooltipModule,
		MatToolbarModule,
		MatListModule,
		RouterModule,
		MatMenuModule,
		FlexLayoutModule,
	],
})
export class MainModule {}
