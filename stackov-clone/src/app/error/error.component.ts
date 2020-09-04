import { Component, OnInit } from '@angular/core';

import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public facebook = faExclamationTriangle;
  constructor() { }

  ngOnInit(): void {
  }

}
