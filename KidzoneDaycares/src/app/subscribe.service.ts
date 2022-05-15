import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscribe } from './subscribe';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  readonly baseUrl='http://localhost:8080/PiCloud/subsribeController';
  constructor(private http: HttpClient) { }
  selectedkidid:any;



  AddSubcription(sub : Subscribe):Observable<Object>
  {
    return this.http.post(`${this.baseUrl}/Subscribe`,sub);
  }













  
  getSubcription():Observable<Subscribe[]>
  {
    return this.http.get<Subscribe[]>(`${this.baseUrl}/subscriptions`);
  }

  public updatesub(id: number , kz: Subscribe ): Observable<Object> {
    return this.http.put(`${this.baseUrl}/updatesub`, kz);
  }

  public deletesub(Id: number) : Observable<Object> {
    return this.http.delete(`${this.baseUrl}/deletesub/${Id}`);
  }



  exportPdfSubs():Observable<Blob>
  {
    return this.http.get(`${this.baseUrl}/exportpdf`,{responseType:'blob'});;
  }
  public getKidzoneById(id : number):Observable<Subscribe>
  {
    return this.http.get<Subscribe>(`${this.baseUrl}/affsubscriber/${id}`);
  }

  getSelectdkidzone()
  {
    return this.selectedkidid;
  }
  setSelectedkidzone(id:any)
  {
    this.selectedkidid=id;
  }
}
