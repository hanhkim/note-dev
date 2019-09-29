import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTreeModule } from '@angular/material/tree';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftMenuComponent } from './modules/left-menu/left-menu.component';
import { LoginComponent } from './modules/login/login.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeRegionComponent } from './modules/home-region/home-region.component';
import { NewNoteComponent } from './modules/new-note/new-note.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    HomeRegionComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTreeModule
  ],
  exports: [
    MatTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
