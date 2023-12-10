import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CvComponent} from "./cv/cv.component";
import {ListCvComponent} from "./list-cv/list-cv.component";
import {ItemCvComponent} from "./item-cv/item-cv.component";
import {DetailCvComponent} from "./detail-cv/detail-cv.component";
import {EmbaucheComponent} from "./embauche/embauche.component";
import {AddCvComponent} from "./add-cv/add-cv.component";
import {DeleteCvComponent} from "./delete-cv/delete-cv.component";
import {DetailComponent} from "./detail/detail.component";
import {MasterDetailsComponent} from "./master-details/master-details.component";
import {TabsComponent} from "./tabs/tabs.component";
import {AutoCompleteComponent} from "./auto-complete/auto-complete.component";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {CvService} from "./services/cv/cv.service";
import {EmbaucheService} from "./services/embauche/embauche.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ROUTING} from "../routing/app.routing";


@NgModule(
    {
        declarations: [
          CvComponent,
          ListCvComponent,
          ItemCvComponent,
          DetailCvComponent,
          EmbaucheComponent,
          AddCvComponent,
          DeleteCvComponent,
          DetailComponent,
          TabsComponent,
          AutoCompleteComponent,
          MasterDetailsComponent
        ],
        imports: [
          FormsModule,
          CommonModule,
          MatInputModule,
          MatAutocompleteModule,
          FormsModule,
          ROUTING,
          ReactiveFormsModule
        ],
        exports: [],
        providers: [
          CvService,
          EmbaucheService
        ],
    }

)
export class cvTechModule {}
