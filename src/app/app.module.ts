
//pipes
import { BigTextPipe } from './common/BigText';

//Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { ReactiveFormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//App Components
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RegisterComponent  } from "./register/register.component";
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';
import { LoginComponent } from './login/login.component';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { AppNewsComponent } from './app-news/app-news.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';


//App Services
import { UserDataService } from './Services/user-data.service';
import { NewsService } from './Services/news.service';

//Login
import { AuthGuard } from './_guards/index';
import { LogoutComponent } from './logout/logout.component';




@NgModule({
  declarations: [
    BigTextPipe,
    AppComponent,
    AppMenuComponent,
    AppFooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TodosComponent,
    UserstatusComponent,
    AppNewsComponent,
    SearchBarComponent,
    SideBarComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
    {
        path: "",
        component : HomeComponent
    },
    {
        path: "login",
        component : LoginComponent
    },
    {
        path: "register",
        component : RegisterComponent
    },
    {
        path: "todos",
        component : TodosComponent,
        canActivate: [AuthGuard] 
    },
    {
        path: "logout",
        component : LogoutComponent,

    },

    // otherwise redirect to home
    { path: '**', redirectTo: '/' }
  ])
  ],
  providers: [UserDataService , NewsService , AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
