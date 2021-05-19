import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("f") signUpForm: NgForm
  questionedAnswer = "pet"
  answer = ""
  genders = ['Male', 'Female']
  submitted = false
  user = {
    userName: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ""
    //   },
    //   secret: "pet",
    //   answer: "",
    //   gender: "Male"
    // })
    this.signUpForm.form.patchValue(
      {
        userData: {
          username: suggestedName
        }
      }
    )
  }

  onSubmit(form: NgForm) {
    console.log(this.signUpForm)
    this.user.userName = this.signUpForm.value.userData.username,
      this.user.email = this.signUpForm.value.userData.email,
      this.user.secretQuestion = this.signUpForm.value.secret,
      this.user.answer = this.signUpForm.value.answer,
      this.user.gender = this.signUpForm.value.gender,
      this.submitted = true,
      this.signUpForm.reset()
  }
}
