import {Component, OnInit} from '@angular/core';
import {HeroService} from "./service_hero/hero.service"

import {Hero} from "./Hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {

  heroes: Hero[];


  constructor(private heroService: HeroService) {

  }

  ngOnInit() {
    this.getHeroes()
  }


  /**
   *
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }


}
