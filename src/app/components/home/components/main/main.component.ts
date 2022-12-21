import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

interface AppLink {
	route: string;
	icon: string;
	name: string;
}

const LINKS: AppLink[] = [
	{
		route: '/home/files',
		icon: 'people',
		name: 'Files',
	},
	{
		route: '/home/upload',
		icon: 'receipt_long',
		name: 'Upload',
	},
	{
		route: '/home/verify',
		icon: 'feed',
		name: 'Verify',
	}
];
@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
	@ViewChild(MatSidenav) sidenav: any;
	sidenavOpened = true;
	links: AppLink[] = LINKS;
	constructor() {}

	ngOnInit(): void {
	}

	ngAfterViewInit() {
		setTimeout(() => {
			this.sidenav.toggle();
		}, 0);
	}
}
