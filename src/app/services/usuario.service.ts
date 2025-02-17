import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})


export class UsuarioService {

  httpClient =inject(HttpClient);

  private baseUrl: string = 'https://peticiones.online/api/users';  

  constructor() {
  }



getById(_id: string) : Promise <Usuario> {

  return firstValueFrom (this.httpClient.get<Usuario>(`${this.baseUrl}/${_id}`))
}


insert( usuario: Usuario): Promise<Usuario>{
  return firstValueFrom(this.httpClient.post<Usuario>( this.baseUrl, usuario))
}

update( usuario: Usuario): Promise<Usuario>{
  return firstValueFrom(this.httpClient.put<Usuario>( this.baseUrl+ "/" + usuario._id, usuario));
}

delete( usuario: Usuario): Promise<Usuario>{
  return firstValueFrom(this.httpClient.delete<Usuario>( this.baseUrl+ "/" + usuario._id));
}


}
