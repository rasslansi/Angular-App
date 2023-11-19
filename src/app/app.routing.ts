
import { RouterModule,Routes } from "@angular/router"
import { CvComponent } from "./cvTech/cv/cv.component"
import { ItemCvComponent } from "./cvTech/item-cv/item-cv.component"
import { DeleteCvComponent } from "./cvTech/delete-cv/delete-cv.component"
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component"
import { DetailCvComponent } from "./cvTech/detail-cv/detail-cv.component"
import { DetailComponent } from "./cvTech/detail/detail.component"
const APP_Routing: Routes = [
    {path: 'cv/:id', component: DetailComponent },    
    {path: 'cv', component: CvComponent }, 
       
]

export const ROUTING = RouterModule.forRoot(APP_Routing)
