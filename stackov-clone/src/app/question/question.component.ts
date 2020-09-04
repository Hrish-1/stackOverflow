import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, MinLengthValidator} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}
  public uiInvalidCredential = false;
  public fbFormGroup = this.fb.group({
    ques: ['', Validators.required],
    description: ['', Validators.required]
  });

  ngOnInit(): void {}
   async addques(){
        const data = this.fbFormGroup.value;
        console.log(data);
      
      // ajax call
      if(sessionStorage.sid){
        try{
          const url = 'http://localhost:3000/add-ques';
          const result: any = await this.http.post(url, data).toPromise();
            this.router.navigate(['browse']); 
            this.uiInvalidCredential = true;
        }catch(err){
            this.router.navigate(['browse']);
        }
        }else{
          this.router.navigate(['login']);
        }
     }  
}
