import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"


export const matchPassword : ValidatorFn = (control: AbstractControl):ValidationErrors|null => {
    
    let password = control.get('password')
    let confirmPassword = control.get('confirmPassword')

    if (password?.value != confirmPassword?.value){
        return {
            passwordmatcherror : true
        }
    }
    
    return null
} 