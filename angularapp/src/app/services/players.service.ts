import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../models/player';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
public apiURL="https://8080-ffbabdadc307818048dccbfcadeone.premiumproject.examly.io/api"
  constructor(private httpclient:HttpClient) { }
getPlayers():Observable<any[]>
{
  return this.httpclient.get<any[]>(this.apiURL+"/players")
}
getPlayer(id:number):Observable<Player>
{
  return this.httpclient.get<Player>(this.apiURL)
}
createPlayer(player:Player):Observable<Player>
{
  return this.httpclient.post<Player>(this.apiURL,player)
}

updatePlayer(id:number,player:Player):Observable<void>
{
  return this.httpclient.put<void>(this.apiURL,player);
}

deletePlayer(id:number):Observable<void>
{
  return this.httpclient.delete<void>(this.apiURL)
}

}
