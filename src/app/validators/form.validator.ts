import { AbstractControl, ValidatorFn } from "@angular/forms";

// Regular expression for a US zip code (5 digits or 5 digits followed by a hyphen and 4 more digits)
const ZIP_CODE_REGEX = /^\d{5}(?:-\d{4})?$/;

export function zipCodeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isValid = ZIP_CODE_REGEX.test(control.value);
    console.log(control.value, isValid);
    return isValid ? null : { invalidZipCode: true };
  };
}
