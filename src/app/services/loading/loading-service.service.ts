import { Injectable } from '@angular/core';
import { NgxUiLoaderService, Time } from 'ngx-ui-loader';
import { BehaviorSubject } from 'rxjs';

const mainLoader = 'main-loader';

@Injectable({
	providedIn: 'root',
})
export class LoadingService {
	private loadingSubject = new BehaviorSubject<boolean>(false);
	isLoading$ = this.loadingSubject.asObservable();
	constructor(private ngxService: NgxUiLoaderService) {}

	startLoading(loaderId: string = mainLoader, time?: Time) {
		this.loadingSubject.next(true);
		this.ngxService.start(loaderId || mainLoader, time);
	}

	stopLoading(loaderId: string = mainLoader) {
		this.loadingSubject.next(false);
		this.ngxService.stop(loaderId || mainLoader);
	}
}
