import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home/home.component';
import {WebMapComponent} from './components/web-map/web-map.component';
import { PoliticaCookiesComponent } from './components/politica-cookies/politica-cookies.component'

const APP_ROUTES: Routes = [
    {path: 'inicio', component: HomeComponent},
    {path: 'MapaWeb', component: WebMapComponent},
    {path: 'PoliticaCookies', component: PoliticaCookiesComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const app_routing = RouterModule.forRoot(APP_ROUTES);
