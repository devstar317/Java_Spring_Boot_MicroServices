import { Injectable } from '@angular/core';
import {Hero} from '../interfaces/hero';
import {HeroList} from '../mocks/heros'
import { Observable, of } from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  private h:Hero = {
    id :1 ,
    name:"Test Hero"
  };
  getHeroList():Observable<Hero[]>{
    //const heroList=of(HeroList);
    this.messageService.add('Hero Service: Fetced Heros');
    return this.http.get<Hero[]>('http://localhost:8080/clients')
    
    //return heroList;
  }
  
  getHero(id: number):Observable<Hero>{
    
    //const hero=HeroList.find(h=>h.id ===id); when data was hardcoded
    const hero=this.http.get<Hero>('http://localhost:8080/clients/'+id);
    this.messageService.add("Found Hero ");
    return hero;
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put('http://localhost:8080/clients/'+hero.id, hero, this.httpOptions).pipe(
      tap((_:any) => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  constructor(private http: HttpClient,private messageService:MessageService) { }
}
