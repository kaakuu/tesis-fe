import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ApiUser } from '@models/auth.model';

@Component({
	selector: 'app-user-profile',
	templateUrl: './user-profile.component.html',
	styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
	// @Input() user: ApiUser;
	@Output() logout = new EventEmitter<void>();
	constructor() {}
}
