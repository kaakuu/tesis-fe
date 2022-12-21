import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CustomSnackBarComponent } from 'src/app/components/custom-snack-bar/custom-snack-bar.component';

@Injectable({
	providedIn: 'root',
})
export class SnackBarService {
	snackBarRef: any;

	constructor(private snackBar: MatSnackBar) {}

	/* Opens snack bar and returns observable that emits when the action is clicked */
	private openSnackBar(message: string, state?: any, action = 'OK', config?: MatSnackBarConfig) {
		const ref = this.snackBar.openFromComponent(CustomSnackBarComponent, {
			duration: 10000,
			...config,
			data: {
				text: message,
				action: action || 'OK',
				state: state || 'default',
			},
		});

		this.snackBarRef = ref;

		return ref.onAction();
	}

	showMessage({ message, action = 'OK', config }: { message: string; action?: string; config?: MatSnackBarConfig }) {
		return this.openSnackBar(message, 'default', action, config);
	}

	showSuccess({ message, action = 'OK', config }: { message: string; action?: string; config?: MatSnackBarConfig }) {
		return this.openSnackBar(message, 'success', action, config);
	}

	showError({ message, action = 'OK', config }: { message: string; action?: string; config?: MatSnackBarConfig }) {
		return this.openSnackBar(message, 'error', action, config);
	}

	showWarning({ message, action = 'OK', config }: { message: string; action?: string; config?: MatSnackBarConfig }) {
		return this.openSnackBar(message, 'warning', action, config);
	}
}
