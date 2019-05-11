import {FormGroup} from '@angular/forms';

export function CheckequalsFunction(kodeord: string, gentagKodeord: string) {

  return (formGroup: FormGroup) => {
    const kodeCheck = formGroup.controls[kodeord];
    const gentagKodeCheck = formGroup.controls[gentagKodeord];

    if(gentagKodeCheck.errors && !gentagKodeCheck.errors.checkequals) {
      // Returnerer hvis en anden validator allerede har fundet en fejl
      return;
    }

    if(kodeCheck.value !== gentagKodeCheck.value) {
      gentagKodeCheck.setErrors({checkequals: true});
    } else {
      gentagKodeCheck.setErrors(null);
    }
  };
}
