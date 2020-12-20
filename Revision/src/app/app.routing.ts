import {RouterModule, Routes} from '@angular/router';
import {CvComponentComponent} from './cv-component/cv-component.component';
import {HeaderComponent} from './header/header.component';
import {AddCvComponent} from './add-cv/add-cv.component';
import {LoginComponent} from './login/login.component';
import {AppComponent} from './app.component';

const APP_ROUTING: Routes = [
  {path: 'addCv', component: AddCvComponent},
  {path: '', component: CvComponentComponent},
  {path: '**', component: LoginComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
