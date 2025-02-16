import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom, map, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  httpClient =inject(HttpClient);

  private baseUrl: string = 'https://peticiones.online/api/users ';  

  constructor() {
  }


getAllWithObservables(): Observable<any> {
  return this.httpClient.get<any>(this.baseUrl);
}


getById (_id: string): Observable <Usuario> {
  return this.httpClient.get<Usuario>(`${this.baseUrl}/${_id}`);
}


}
