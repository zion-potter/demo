import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  mobileValid = true;

  mobilePristine = true;

  createUser(info: any, valid: boolean) {
    console.log(valid);
    console.log(info);
  }

  constructor() {
  }

  ngOnInit() {
  }

  onMobileInput(form: NgForm) {
    if (form) {
      this.mobileValid = form.form.get('mobile').valid;
      this.mobilePristine = form.form.get('mobile').pristine;
    }
  }

}
