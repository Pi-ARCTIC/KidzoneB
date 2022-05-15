import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { KidZone } from 'src/kid-zone';

@Injectable({
  providedIn: 'root'
})
export class KidzoneService {

  
  readonly API_URL = 'http://localhost:8080/PiCloud/kidzoneController'

    constructor(private http: HttpClient) { }
  
    getAllKidzones(): Observable<any>{
      return this.http.get(`${this.API_URL}/afficherkz`);
    }


    getAllKidzonesOrderByDateDesc(): Observable<any>
    {
      return this.http.get(`${this.API_URL}/AfficherKidsOrderByDate`);
    }
    
    public addkidzone(kz: any): Observable<Object>{
      return this.http.post<any>(`${this.API_URL}/ajouterkz`, kz);
    }
  
    public updatekidzone(id: number , kz: KidZone ): Observable<Object> {
      return this.http.put(`${this.API_URL}/updatekz`, kz);
    }
  
    public deletekidzone(Id: number) : Observable<Object> {
      return this.http.delete(`${this.API_URL}/deletekz/${Id}`);
    }

    public getKidzoneById(id : number):Observable<KidZone>
    {
      return this.http.get<KidZone>(`${this.API_URL}/afficherkz/${id}`);
    }


  }
