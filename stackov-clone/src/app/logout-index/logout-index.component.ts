// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-logout-index',
//   templateUrl: './logout-index.component.html',
//   styleUrls: ['./logout-index.component.css']
// })
// export class LogoutIndexComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-logout-index',
  templateUrl: './logout-index.component.html',
  styleUrls: ['./logout-index.component.css']
})
export class LogoutIndexComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  logout() {
    // sessionStorage.removeItem('sid');
    // this.router.navigate(['login']);

    // open modal
    this.modalService.open(LogoutComponent, {
      centered: true,
    }); 
  }

}
