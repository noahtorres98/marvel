import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  constructor(private http: HttpClient) {}

  private marvelURL = 'https://gateway.marvel.com/';

  private publicKey = 'eee9c526387e6d28ebbc764b858c792f';

  private privateKey = '2e8461df5279924ab4cdef77c12c0c29203c5839';

  private md5HashKey = 'ac910f5c07e76eb80ec6f8ea7e1a5012';

  getMarvelCharacters(): Observable<any> {
    return this.http.get(
      this.marvelURL +
        'v1/public/characters?ts=1&apikey=' +
        this.publicKey +
        '&hash=' +
        this.md5HashKey
    );
  }
}
