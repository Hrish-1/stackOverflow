import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  ngOnInit(): void {
  }

  closeTheModal() {
    this.activeModal.dismiss();
  }

  logOutAndClose() {
    sessionStorage.removeItem('sid');

    // dismiss the modal
    this.activeModal.dismiss();

    this.router.navigate(['home']);
  }


}
