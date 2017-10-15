import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs/';

export function mobileValidator(mobile: FormControl): any {
  const value = (mobile.value || '') + '';
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreg.test(value);
  console.log('mobile是否校验通过：' + valid);
  return valid ? null : {mobile: true};
}

export function mobileAsyncValidator(mobile: FormControl): any {
  const value = (mobile.value || '') + '';
  const myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const valid = myreg.test(value);
  console.log('mobile是否校验通过：' + valid);
  return Observable.of(valid ? null : {mobile: true}).delay(5000);
}

export function passwordValidator(info: FormGroup): any {
  const password: FormControl = info.get('password') as FormControl;
  const pConfirm: FormControl = info.get('passwordConfirm') as FormControl;
  if (password != null && pConfirm != null){
    const valid: boolean = password.value === pConfirm.value;
    console.log('password是否校验通过：' + valid);
    return valid ? null : {password: {description: '两次输入的密码不匹配'}};
  }
  return null;
}
