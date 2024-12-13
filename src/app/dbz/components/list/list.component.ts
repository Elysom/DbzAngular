import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { OutletContext } from '@angular/router';
//Decorador Component de los Characters
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  //Decorador input para poner los character en este caso trunk
@Input()
  public characterList: Character[] = [{
    name:'Trunk',
    power: 10
  }]

//onDeleteId = Index value= number,
//Evento para borrar un Character con el decorador output
@Output()
public onDelete: EventEmitter<number> = new EventEmitter();

//Coje el numero del character y lo elimina de la lista
onDeteteCharacter(index:number):void{

   this.onDelete.emit(index);

  }

}
