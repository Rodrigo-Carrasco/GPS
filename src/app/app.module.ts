import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { DocentesComponent } from './docentes/docentes.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DefaultPipe } from './shared/image.pipe';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { CommonModule } from '@angular/common';
import { CrearDocenteComponent } from './crear-docente/crear-docente.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DocentesComponent,
    PageNotFoundComponent,
    DefaultPipe,
    ModalAddComponent,
    CrearDocenteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'docentes',component:DocentesComponent},
      {path:'creardocente',component:CrearDocenteComponent},
      {path:'login',component:LoginComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',component:PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent, NavbarComponent, HomeComponent]
})
export class AppModule { }
