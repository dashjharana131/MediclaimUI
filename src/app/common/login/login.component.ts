/* Import angular core components */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  err = false;

  ngOnInit() {

    /* Login form validation start */
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]]
    });
    /* Login form validations end */
  }

  /*convenience getter for easy access to form fields*/
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    var reqObj1 = {
      "email": this.loginForm.value.email,
      "password": this.loginForm.value.password
    };

    /* Api Call */
    this.http.post('http://10.117.189.207:9393/medi-claim/login', this.loginForm.value).subscribe((res: any) => {
      if (res.statusCode == 201) {
        alert('Success');
      }
      sessionStorage.setItem("userId", res['userId']);
      this.router.navigate(['/claim/approver']);
    }, (err) => {
      this.err = true;
    });
  }
}
