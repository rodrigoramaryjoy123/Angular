import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { config } from "rxjs";
import { LoginComponent } from "./components/login/login.component";
import { HomepageComponent } from "./components/homepage/homepage.component";
import { SignupComponent } from "./components/signup/signup.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";

const routes: Routes = [
{path: "",component: HomepageComponent },
{path: "login" ,component: LoginComponent},
{path: "signup" ,component: SignupComponent },
{path: "landingpage" ,component: LandingPageComponent}


];


@NgModule({
  
  imports:[
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),

  ],

  declarations:[
    AppComponent,

  ],

  providers:[


  ],
  
  bootstrap:[
    AppComponent

  ]


})

export class AppModule{}