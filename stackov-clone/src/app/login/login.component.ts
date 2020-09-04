import { Component, OnInit } from '@angular/core';
import { faFacebookF, faLinkedinIn, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
//import { LogoutComponent } from '../logout/logout.component';
import { ForgotComponent } from '../forgot/forgot.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public facebook = faFacebookF;
  public google = faGooglePlusG;
  public linkdin = faLinkedinIn;
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
    passw: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
  }

  forgotpass(){
    this.modalService.open(ForgotComponent, {
      centered: true,
    });
  }

  async loginProcessHere() {
    const data = this.fbFormGroup.value;
  
    // ajax call
    const url = 'http://localhost:3000/auth-user';
    const result: any = await this.http.post(url, data).toPromise();
    if (result.opr) {
      sessionStorage.setItem('sid', 'true');
      sessionStorage.setItem('emailid',result.emailid);
      this.router.navigate(['browse']);
    } else {
      this.uiInvalidCredential = true;
      alert("Invalid Email or password");
    }
  }
}

