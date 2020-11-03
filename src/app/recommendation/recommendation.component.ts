import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  @Input() recommendedPlayers;
  
  constructor() { }

  ngOnInit(): void {
  }
}
