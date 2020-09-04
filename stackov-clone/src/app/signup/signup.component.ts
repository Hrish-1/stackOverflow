import { Component, OnInit } from '@angular/core';
import { faFacebookF, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public facebook = faFacebookF;
  public google = faGooglePlusG;
  public linkdin = faLinkedinIn;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
  }
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    uname: ['', Validators.required],
    passw: ['', Validators.required],
    email: ['', Validators.required]
  });

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['login']);
  }

}
