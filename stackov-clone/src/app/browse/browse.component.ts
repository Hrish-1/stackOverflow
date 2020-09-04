import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { QuestionComponent } from '../question/question.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AnswerComponent } from '../answer/answer.component';
import { HttpClient } from '@angular/common/http';
import { faThumbsDown, faThumbsUp , faEdit } from '@fortawesome/free-solid-svg-icons';

// const routes: Routes = [      {path:'answer' , component : AnswerComponent}
// ];
@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {

  public like = faThumbsUp;
  public dislike = faThumbsDown;
  public edit = faEdit;


  taskList :any = [];
  

  constructor(private router: Router, private modalService: NgbModal, private http: HttpClient) { }

   ngOnInit(): void {
     this.getques();
   }

   async getques(){
    let url = "http://localhost:3000/get-ques";
    try{
    let results :any = await this.http.get(url).toPromise();
      console.log(results.output[0]);
      for(let i = 0; i < results.output.length; i++){
        this.taskList.push(results.output[i]);
        console.log(this.taskList);
      }

    }catch(err){
      console.log("no data");
    } 
   }

  processQuestion() {
    // sessionStorage.removeItem('sid');
    // this.router.navigate(['login']);

    // open modal
    // this.modalService.open(QuestionComponent, {
    //   centered: true,
    // });
    this.router.navigate(['question']);
  }

  
  answerhere() {
    // sessionStorage.removeItem('sid');
    // this.router.navigate(['login']);

    // open modal
    this.router.navigate(['answer']);

    // this.modalService.open(AnswerComponent, {
    //   centered: true,
    // });
  }
  getQid(data){
    sessionStorage.setItem('value',data);
    console.log(sessionStorage.value); 
  }
}
