import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '1062a2c3c209e14291f5';
  private clientsecret = '840c4eee0b1ba51ae014bdd7f528ec832d0ab461';

  constructor(private http:Http) { 
  	this.username = 'kishan';
  }

  getDetails(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getupdate(username:string){
  	this.username = username;
  }

}