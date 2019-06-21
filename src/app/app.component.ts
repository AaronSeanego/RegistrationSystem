import { Component } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RegistrationSystem';
  data_form;
  first_name;
  surname;
  age;
  email;
  cell_number;
  StudentInfo = [];
  constructor(public formBuilder:FormBuilder){
    this.data_form = formBuilder.group({
      first_name: ["",Validators.required],
      surname: ["",Validators.required],
      age: ["",Validators.max(100)],
      email: ["",Validators.email],
      cell_number: ["",Validators.max(10)]
    })
  }
  
  firstName;
  surName;
  Ages;
  eMail;
  cellNumber;
  addStudents(){
    this.StudentInfo.push({studentName:this.firstName,studentSurname:this.surName,studentAge:this.Ages,studentEmail:this.eMail,studentContacts:this.cellNumber})
    this.firstName = "";
    this.surName = "";
    this.Ages = "";
    this.eMail = "";
    this.cellNumber = "";
  }
}
