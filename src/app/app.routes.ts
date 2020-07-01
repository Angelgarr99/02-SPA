import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroesArrComponent } from './components/heroes-arr/heroes-arr.component';
import { HeroeComponent } from './components/heroe/heroe.component';
const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'abaut', component: AboutComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'heroesArr/:termino', component: HeroesArrComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
