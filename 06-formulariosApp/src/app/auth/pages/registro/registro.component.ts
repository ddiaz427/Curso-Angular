import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Validator } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {



  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern(this.valid.nombreApellidoPattern) ]],
    email: ['', [ Validators.required, Validators.pattern(this.valid.emailPattern) ], [this.emailValidator]],
    username: ['', [ Validators.required, this.valid.noPuedeSerStrider ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password_confirm: ['', [ Validators.required ]]
  }, {
    validators: [this.valid.camposIguales('password','password_confirm')]
  })

  get emailErrorMsg(): string{

    const errors = this.miFormulario.get('email')?.errors;

    if(errors?.required){
      return 'Email es obligatorio'
    }
    else if(errors?.pattern){
      return 'El formato es inválido';
    }
    else if(errors?.emailTomado){
      return 'El email ya esta tomado';
    }
    return '';

  }
  constructor(private fb: FormBuilder,
              private valid: ValidatorService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Dario Diaz',
      email: 'ingdariodiaz@gmail.com'
    });
  }
  


  campoNoValido( campo: string ){
    return this.miFormulario.get(campo)?.invalid &&
            this.miFormulario.get(campo)?.touched;
  }

  crearRegistro(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
