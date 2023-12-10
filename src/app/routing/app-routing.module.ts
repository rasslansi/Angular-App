import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppPreloadingStrategy} from "./app-preloading-strategy";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: AppPreloadingStrategy
  })],
  providers: [AppPreloadingStrategy],
  exports: [RouterModule]
})
export class AppRoutingModule { }
