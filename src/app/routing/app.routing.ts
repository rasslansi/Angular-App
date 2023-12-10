
import { RouterModule,Routes } from "@angular/router"
import { CvComponent } from "../cvTech/cv/cv.component"
import { ItemCvComponent } from "../cvTech/item-cv/item-cv.component"
import { DeleteCvComponent } from "../cvTech/delete-cv/delete-cv.component"
import { AddCvComponent } from "../cvTech/add-cv/add-cv.component"
import { DetailCvComponent } from "../cvTech/detail-cv/detail-cv.component"
import { DetailComponent } from "../cvTech/detail/detail.component"
import { AppComponent } from "../app.component"
import { HomeComponent } from "../home/home.component"
import { LoginComponent } from "../Authentification/login/login.component"
import {ProduitsViewComponent} from "../produits/produits-view/produits-view.component";
import {DetailResolverService} from "../cvTech/resolvers/detail-resolver.service";
import {CvResolverService} from "../cvTech/resolvers/cv-resolver.service";
import {
    AuthGuardService as AuthGuard
} from '../Authentification/services/guard/auth-guard.service';
import {MasterDetailsComponent} from "../cvTech/master-details/master-details.component";
import {AppPreloadingStrategy} from "./app-preloading-strategy";

const APP_Routing: Routes = [
    {
      path: '',
      component: HomeComponent,
    },
  {
    path: 'AddCv',
    component: AddCvComponent,
  },
  {
    path:'list' ,
    children: [
      {
        path: ':id',
        component: MasterDetailsComponent,
        resolve: {
          personne: DetailResolverService,
          personnes: CvResolverService,
        }
      },
      {
        path: '',
        component: MasterDetailsComponent,
        resolve: {
          personnes: CvResolverService,
        },
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
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
      data: { preload: true },
      children: [
        {
          path: ':id',
          component: DetailComponent,
            resolve: {
                personne: DetailResolverService,
            }
        },
        {
          path: '',
          component: CvComponent,
            resolve: {
                personnes: CvResolverService,
            }
          // canActivate: [AuthGuard],
        },
        // No need for a redirect here, it will already default to 'cv'
      ],
    canActivate: [AuthGuard],
    },
    // Wildcard route at the end
    { path: '**', redirectTo: '' },
  ];


export const ROUTING = RouterModule.forRoot(APP_Routing, {
  preloadingStrategy: AppPreloadingStrategy,
})
