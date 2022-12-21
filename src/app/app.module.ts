import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, POSITION, SPINNER } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
	bgsColor: '#0097A7',
	bgsOpacity: 0.5,
	bgsPosition: POSITION.bottomRight,
	bgsSize: 60,
	bgsType: SPINNER.circle,
	blur: 5,
	delay: 0,
	fastFadeOut: true,
	fgsColor: '#0091ea',
	fgsPosition: POSITION.centerCenter,
	fgsSize: 60,
	fgsType: SPINNER.foldingCube,
	gap: 24,
	logoPosition: POSITION.centerCenter,
	logoSize: 120,
	logoUrl: '',
	masterLoaderId: 'main-loader',
	overlayBorderRadius: '',
	overlayColor: 'rgba(40, 40, 40, 0.6)',
	pbColor: '#0097A7',
	pbDirection: PB_DIRECTION.leftToRight,
	pbThickness: 3,
	hasProgressBar: false,
	text: '',
	textColor: '#FFFFFF',
	textPosition: POSITION.centerCenter,
	maxTime: -1,
	minTime: 300,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NgxUiLoaderModule],
})
export class AppModule { }
