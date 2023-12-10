import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { ListCvComponent } from './cvTech/list-cv/list-cv.component';
import { ItemCvComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './cvTech/detail-cv/detail-cv.component';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule } from '@angular/common/http';
import { ROUTING } from './routing/app.routing';
import { HeaderComponent } from './header/header.component';
import { AddCvComponent } from './cvTech/add-cv/add-cv.component';
import { DeleteCvComponent } from './cvTech/delete-cv/delete-cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Authentification/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotifierComponent } from './notifier/notifier.component';
import { TabsComponent } from './cvTech/tabs/tabs.component';
import { AutoCompleteComponent } from './cvTech/auto-complete/auto-complete.component';
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { ProduitsViewComponent } from './produits/produits-view/produits-view.component';
import { ProduitsItemComponent } from './produits/produits-item/produits-item.component';
import { MasterDetailsComponent } from './cvTech/master-details/master-details.component';
import {cvTechModule} from "./cvTech/cvTech.module";
import {AuthentificationModule} from "./Authentification/Authentification.module";
import {AppPreloadingStrategy} from "./routing/app-preloading-strategy";

@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    HeaderComponent,
    HomeComponent,

    NotifierComponent,
    ProduitsViewComponent,
    ProduitsItemComponent,

  ],
    imports: [
      cvTechModule,
      AuthentificationModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            preventDuplicates: true,
        }),
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ROUTING,
      FormsModule,

    ],
  providers: [AppPreloadingStrategy],
  bootstrap: [AppComponent]
})
export class AppModule { }
