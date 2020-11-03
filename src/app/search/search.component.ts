import { Component, OnInit } from '@angular/core';
import { CricService } from '../cric.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public playerName = null;
  public playerData;
  public recommend;
  public recommendedPlayers;

  public _cricService;

  public constructor(cricService : CricService) {
    this._cricService = cricService;
   }

  ngOnInit(): void {
  }

  /**
   * 
   */
  public searchPlayer() {
    let self = this;
    this.playerData =  this._cricService.getPlayers(this.playerName).subscribe(data => {
      self.playerData =  data.data;
      self.playerData.forEach(player => {
        self._cricService.getPlayerInfo(player.pid).subscribe(playerData => {
          player.country = playerData.country;
          player.imageURL = playerData.imageURL;
          player.majorTeams = playerData.majorTeams;
        });
        player.isRecommend  = false;
      });
    });
  }

  /**
   * 
   * @param player 
   */
  public toogleRecommedation(player) {
    if(!player.isRecommend) {
      player.isRecommend = true;
    }else {
      player.isRecommend = false;
    }
    this.recommendedPlayers = this.playerData.filter(player => player.isRecommend);  
  }

}
