import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactivedFormComponent } from './reactived-form/reactived-form.component';
import {HttpModule} from '@angular/http';
import { MobileValidatorDirective } from './directives/mobile-validator.directive';
import { PasswordValidatorDirective } from './directives/password-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    TemplateFormComponent,
    ReactivedFormComponent,
    MobileValidatorDirective,
    PasswordValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
