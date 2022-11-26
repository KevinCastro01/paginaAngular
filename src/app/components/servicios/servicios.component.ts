import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
urlChampions:string = 'https://es.uefa.com/uefachampionsleague/';
urlMundial:string = 'https://www.fifa.com/es/tournaments/mens/worldcup';
urlConference:string = 'https://es.uefa.com/uefaeuropaconferenceleague/';
urlNationals:string = 'https://es.uefa.com/uefanationsleague/';
}
