import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes-arr',
  templateUrl: './heroes-arr.component.html'
})
export class HeroesArrComponent implements OnInit {
  heroes: Heroe[] = [];
  termino: string;
    // tslint:disable-next-line: variable-name
  constructor(private _heroesService: HeroesService,
              private activateRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.termino = params.termino;
      this.heroes = this._heroesService.buscarHeroes(params.termino);
      console.log(this.heroes);
    });

  }
  verHeroe( idx: number){
    this.router.navigate( ['/heroe', idx] );
    }
}
