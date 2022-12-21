import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarState } from './snack-bar';
@Component({
	selector: 'app-custom-snack-bar',
	templateUrl: './custom-snack-bar.component.html',
	styleUrls: ['./custom-snack-bar.component.scss'],
})
export class CustomSnackBarComponent {
	text: string;
	state: SnackBarState;
	action: string;
	constructor(
		@Inject(MAT_SNACK_BAR_DATA)
		private data: { text: string; state: SnackBarState; action: string },
		private snackBar: MatSnackBarRef<CustomSnackBarComponent>
	) {
		this.text = this.data.text;
		this.state = this.data.state || 'default';
		this.action = this.data.action || 'OK';
	}

	// ngOnInit(): void {}

	get iconName() {
		switch (this.state) {
			case 'success':
				return 'check_circle_outline';
			case 'warning':
				return 'report';
			case 'error':
				return 'cancel';
			default:
				return 'verified';
		}
	}

	onAction() {
		this.snackBar.dismissWithAction();
	}
}
