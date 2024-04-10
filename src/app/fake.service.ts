import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FakeModel} from "./fake-model";

@Injectable({
  providedIn: 'root'
})
export class FakeService {

  constructor(public httpclient:HttpClient) { }

  postjsonapi():Observable<FakeModel[]>
  {
     return this.httpclient.get<FakeModel[]>("https://jsonplaceholder.typicode.com/posts")

  }



}
