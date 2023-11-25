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
getPlayer(id:number)Observabl
{

}
createPlayer(player:Player)
{}

updatePlayer(id:number)
{}

deletePlayer(id:number)
{

}

}
