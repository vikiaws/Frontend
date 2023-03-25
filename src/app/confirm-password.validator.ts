import { AbstractControl, ValidationErrors } from "@angular/forms";
export class CustomValidators {
  [x: string]: any;
  static passwordsMatching(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password1')?.value;
    const passwordConfirm = control.get('password2')?.value;
    if ((password === passwordConfirm) && (password !== null && passwordConfirm !== null)) {
      return null;
    } else {
      return { passwordsNotMatching: true };
    }
  }
}