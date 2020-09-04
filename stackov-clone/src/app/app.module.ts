import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import{ FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowseComponent } from './browse/browse.component';
import { QuestionComponent } from './question/question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AnswerComponent } from './answer/answer.component';
import { LogoutIndexComponent } from './logout-index/logout-index.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    SignupComponent,
    AboutComponent,
    HomeComponent,
    BrowseComponent,
    QuestionComponent,
    AnswerComponent,
    LogoutIndexComponent,
    LogoutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
