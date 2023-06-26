import { Component } from '@angular/core';

const HEROES=[
  {id: 1, name:'Superman'},
  {id: 2, name:'Batman'},
  {id: 3, name:'Batgirl'},
  {id: 4, name:'Robin'},
  {id: 5, name:'Flash'},

]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  home='Salut! sunt in componenta home';

  colorP: string='red';

  eroi=HEROES;

}
