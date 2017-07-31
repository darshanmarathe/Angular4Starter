import { BigTextPipe } from './common/BigText';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'
import { ReactiveFormsModule }   from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RegisterComponent  } from "./register/register.component";
import { HomeComponent } from './home/home.component';
import { TodosComponent } from './todos/todos.component';




@NgModule({
  declarations: [
    BigTextPipe,
    AppComponent,
    AppMenuComponent,
    AppFooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
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
        component : TodosComponent
    },
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
