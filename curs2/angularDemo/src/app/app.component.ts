import { Component } from '@angular/core';
import { User } from './model/user';
import { AlertaService } from './alerta.service';

const HEROES=[
  {id:1, name:'Superman'},
  {id:2, name:'Batman'},
  {id:3, name:'Batgirl'},
  {id:4, name:'Robin'},
  {id:5, name:'Flash'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Angular Demo';

  descriere: string='O scurta descriere';
  culoare:string='red';
  nr:number=0;
  imgSrc:string='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bMgQ8MhbnQexpqHgIgBJPA.png';
  valoare:string='Valoare input'
  afiseaza:boolean=true;

  

  showImg(){
    if(this.imgSrc !==''){
      this.imgSrc=''
    }
    else{
      this.imgSrc='https://miro.medium.com/v2/resize:fit:1400/format:webp/1*bMgQ8MhbnQexpqHgIgBJPA.png';
    }
  }
  showImg2(){
    this.afiseaza= !this.afiseaza;
  }

  persoana:User={
    id:1,
    nume:'Popescu',
    prenume:'Ion',
  }
  eroi=HEROES;

  inputCount(){
    if(this.valoare.length>20){
      this.alertaService.afiseazaMesaj('Maxim 20 de caractere')
      this.valoare='Valoare input'
    }
  }

  constructor(private alertaService:AlertaService){

  }
}


