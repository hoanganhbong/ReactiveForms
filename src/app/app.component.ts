import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
  rfContact: FormGroup;
  submitted = false;
  constructor() {
    
   }

  ngOnInit() {
    this.rfContact = new FormGroup({
      name: new FormControl('',[Validators.required,Validators.minLength(3)]),
      email: new FormControl('',[Validators.required,Validators.email]),
      age: new FormControl('',[Validators.required])
    });
  }

  get f() { return this.rfContact.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.rfContact.invalid) {
        return;
    }


    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.rfContact.value))

  }


}
