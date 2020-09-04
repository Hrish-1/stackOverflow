import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faLinkedin, faTwitterSquare, faInstagramSquare, faPinterestSquare, faGooglePlusSquare } from '@fortawesome/free-brands-svg-icons';



@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public imgsrc = 'assets/about.png';
  public facebook = faStar;
  public fb = faFacebookSquare;
  public twitter = faTwitterSquare;
  public instagram = faInstagramSquare;
  public linkdin = faLinkedin;
  public pint = faPinterestSquare;
  public google = faGooglePlusSquare;



  constructor() { }

  ngOnInit(): void {
  }

}
