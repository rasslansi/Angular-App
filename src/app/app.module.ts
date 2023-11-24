import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListCvComponent } from './cvTech/list-cv/list-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierComponent } from './notifier/notifier.component';
import { TabsComponent } from './cvTech/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListCvComponent,
    ItemCvComponent,
    DetailCvComponent,
    EmbaucheComponent,
    HttpComponent,
    HeaderComponent,
    AddCvComponent,
    DeleteCvComponent,
    DetailComponent,
    HomeComponent,
    LoginComponent,
    NotifierComponent,
    TabsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
    }),
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
