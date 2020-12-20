import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { FilsComponent } from './fils/fils.component';
import { CvComponentComponent } from './cv-component/cv-component.component';
import { ListeComponent } from './liste/liste.component';
import { ItemComponent } from './item/item.component';
import { DetailsComponent } from './details/details.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import {ROUTING} from './app.routing';
import { HeaderComponent } from './header/header.component';
import { AddCvComponent } from './add-cv/add-cv.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponent,
    CvComponentComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    EmbaucheComponent,
    HeaderComponent,
    AddCvComponent,
    LoginComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ROUTING
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
