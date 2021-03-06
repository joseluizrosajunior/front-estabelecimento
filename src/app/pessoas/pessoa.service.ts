import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const API = environment.ApiUrl;

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(private http: HttpClient) { }

  listAll() {
    return this.http
        .get<any[]>(API + '/pessoas');       
}
}
