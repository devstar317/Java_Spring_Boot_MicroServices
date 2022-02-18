import { Component, OnInit ,Input } from '@angular/core';
import {Hero} from '../interfaces/hero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'
import {HeroService} from '../services/hero.service'


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero?:Hero;
  constructor(private route:ActivatedRoute,
    private heroService:HeroService,
    private location:Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe((hero:Hero) => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}
