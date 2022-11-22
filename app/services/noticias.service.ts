import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../pages/Interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private Http:HttpClient) { }

  getTopHeadLines(){
    return this.Http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=21e90f626ba44fa6b755345447bf0ddb')
  }
}
