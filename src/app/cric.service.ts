import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CricService {
  
  readonly API_KEY = "VsSJ9hxjWQYkUtIGefkxtVMRnlm2";
  private _http;

  constructor(http: HttpClient) { 
    this._http = http;
  }

  /**
   * 
   * @param playerId 
   */
  public getPlayerInfo(playerId) {
    return this._http.get("https://cricapi.com/api/playerStats",{params: {apikey: this.API_KEY,pid : playerId}});
  }

  /**
   * 
   * @param playername 
   */
  public getPlayers(playername) {
    return this._http.get("https://cricapi.com/api/playerFinder",{params: {apikey: this.API_KEY,name : playername}});
  }

}
