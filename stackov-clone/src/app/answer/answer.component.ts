// import { Component, OnInit } from '@angular/core';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

// @Component({
//   selector: 'app-answer',
//   templateUrl: './answer.component.html',
//   styleUrls: ['./answer.component.css']
// })
// export class AnswerComponent implements OnInit {

//   constructor(public activeModal: NgbActiveModal) { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit,ElementRef } from '@angular/core';
import { faThumbsDown, faThumbsUp , faEdit } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, MinLengthValidator} from '@angular/forms';
import { faWindows } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  q = sessionStorage.qvalue;  
  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
) {} 

  public like = faThumbsUp;
  public dislike = faThumbsDown;
  public edit = faEdit;

  
public uiInvalidCredential = false;
public fbFormGroup = this.fb.group({
  ans: ['', Validators.required]
});

  ngOnInit(): void {
    this.getans();
  }

  list :any = [];
  //qlist: any = [];
  s = sessionStorage.emailid;

  async addans(){
    const data = [this.fbFormGroup.value,sessionStorage.value];
  
  // ajax call
  if(sessionStorage.sid){
    try{
      const url = 'http://localhost:3000/add-ans';
      const result: any = await this.http.post(url, data).toPromise();
        location.reload(); 
        this.uiInvalidCredential = true;
    }catch(err){
        this.router.navigate(['error']);
    }
    }else{
      this.router.navigate(['login']);
    }
 }
 async getans(){
   const data = [sessionStorage.value];
   if(sessionStorage.sid){
    try{
      const url = 'http://localhost:3000/get-ans';
      const result: any = await this.http.post(url, data).toPromise();
      for(let i = 0; i < result.output.length; i++){
        this.list.push(result.output[i]);
      }
      console.log(this.list[0].ques);
     // this.qlist.push(this.list[0].ques);
        this.uiInvalidCredential = true;
    }catch(err){
        this.router.navigate(['error']);
    }
    }else{
      this.router.navigate(['login']);
    }
 }

}

