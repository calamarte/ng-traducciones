import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  private baseUrl = 'http://localhost:8080/palabra';

  constructor() { }

public async getAll(){
   let response = await fetch(this.baseUrl + '/all');
  return await response.json()  
}

public async getAllByGrupo(){
  let response = await fetch(this.baseUrl + '/grupo/all');
  return await response.json();
}

}
