import { Component, OnInit } from '@angular/core';
import {Hero} from '../interfaces/hero';
import {HeroService} from '../services/hero.service';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css',
  '../static/css/ace-admin/ace-fonts.min.css',
  '../static/css/ace-admin/ace-rtl.min.css',
  '../static/css/ace-admin/ace-skins.min.css',
  '../static/css/ace-admin/ace.min.css'
  ,'../static/css/footable.min.css'
  ,'../static/css/bootstrap/bootstrap.min.css'
  ,'../static/css/footable.core.min.css',
  '../static/css/font-awesome/font-awesome.min.css',
  '../static/css/layout.min.css'
]
})
export class HeroesComponent implements OnInit {
  title= "Hero's Editor"
  heroList:Hero[] = [];
  //selectedHero?:Hero;

  hero : Hero ={
    id :1 ,
    name:"this.heroName"
  }
  
  constructor(private heroService:HeroService, private messageService:MessageService) {
     
   }

   getHeroList():void{
    this.heroService.getHeroList().subscribe((heroList:any) => this.heroList = heroList);
   }

  ngOnInit(): void {
    this.getHeroList();
  }
/*
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }*/

}
