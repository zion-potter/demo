import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {mobileAsyncValidator, mobileValidator, passwordValidator} from '../validators/Validators';

@Component({
  selector: 'app-reactived-form',
  templateUrl: './reactived-form.component.html',
  styleUrls: ['./reactived-form.component.css']
})
export class ReactivedFormComponent implements OnInit {

  private formModel: FormGroup;

  private fb: FormBuilder = new FormBuilder();


  constructor() {
    this.formModel = this.fb.group({
      nickname: ['', [Validators.required, Validators.minLength(6)]],
      emails: this.fb.array([
        [''],
      ]),
      mobile: ['', mobileValidator, mobileAsyncValidator],
      passwordInfo: this.fb.group({
        password: ['', [Validators.required]],
        passwordConfirm: [''],
      }, {validator: passwordValidator})
    });
  }

  addEmail() {
    const emails = this.formModel.get('emails') as FormArray;
    emails.push(new FormControl());
    console.log(this.formModel.value);
  }

  ngOnInit() {
  }

  createUser(info: any) {
    const nicknameValid: boolean = this.formModel.get('nickname').valid;
    console.log('nickname是否校验通过：' + nicknameValid);
    const nicknameErrors: any = this.formModel.get('nickname').errors;
    console.log('nickname是否校验通过：' + JSON.stringify(nicknameErrors));
    if (this.formModel.valid) {
      console.log(this.formModel.value);

    }
  }

}
