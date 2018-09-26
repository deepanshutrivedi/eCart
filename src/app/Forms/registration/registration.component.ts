import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  onFormSave(form: NgForm){
    if(form.invalid){
      return;
    }
    console.log(form.value);

  }

}
