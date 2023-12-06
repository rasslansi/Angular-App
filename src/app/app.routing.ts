
import { RouterModule,Routes } from "@angular/router"
import { CvComponent } from "./cvTech/cv/cv.component"
import { ItemCvComponent } from "./cvTech/item-cv/item-cv.component"
import { DeleteCvComponent } from "./cvTech/delete-cv/delete-cv.component"
import { AddCvComponent } from "./cvTech/add-cv/add-cv.component"
import { DetailCvComponent } from "./cvTech/detail-cv/detail-cv.component"
import { DetailComponent } from "./cvTech/detail/detail.component"
import { AppComponent } from "./app.component"
import { HomeComponent } from "./home/home.component"
import { LoginComponent } from "./login/login.component"
import {ProduitsViewComponent} from "./produits/produits-view/produits-view.component";
const APP_Routing: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
      },
    {
        path: 'produit',
        component: ProduitsViewComponent,
    },
    {
      path: 'cv',
      children: [
        {
          path: ':id',
          component: DetailComponent,
          // canActivate: [AuthGuard],
        },
        {
          path: '',
          component: CvComponent,
          // canActivate: [AuthGuard],
        },
        // No need for a redirect here, it will already default to 'cv'
      ],
    },
    // Wildcard route at the end
    { path: '**', redirectTo: '' },
  ];


export const ROUTING = RouterModule.forRoot(APP_Routing)
