import {NgModule} from "@angular/core";
import {ROUTING} from "../routing/app.routing";
import {AppRoutingModule} from "../routing/app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {LoginComponent} from "./login/login.component";
import {AuthService} from "./services/auth/auth.service";
import {FormsModule} from "@angular/forms";

@NgModule(
    {
        imports: [
          ROUTING,
          AppRoutingModule,
          HttpClientModule,
          FormsModule,
        ],
        exports: [],
        declarations: [
          LoginComponent
        ],
        providers: [
          AuthService
        ],
    }
)
export class AuthentificationModule {}
