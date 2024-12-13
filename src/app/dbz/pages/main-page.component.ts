import { Character } from './../interfaces/character.interface';
import { Component} from '@angular/core';

//Componente de la main page
@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  //Creacion de los Characters por defecto
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name:'Goku',
    power: 9500
  },{
    name:"Vegeta",
    power: 7500
  }];

 // onDelete = Index value: number;
  //Metodo para poner los Characters en la lista de caracters
  onNewCharacter(character:Character): void{
    this.characters.push(character);
  }
  //Metodo para borrr el caracter seguin el numero del index del array
  onDeleteCharacter(index:number){

    //this.characters.splice(1,2)
    this.characters.splice(index,1);
  }

}
