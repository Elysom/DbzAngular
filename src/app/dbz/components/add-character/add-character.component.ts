import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({//Decorador component para los Characters 
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
//Exporta  la clase Add caracter
export class AddCharacterComponent {
 @Output()//Decorador para mostrar el Character
 public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {//Crea el character
      name:'',
      power: 0
    };
    
    emitCharacter():void{//Mandar el Character

      if (this.character.name.length === 0) return;//Si el nombre es 0 no hagas nada

      this.onNewCharacter.emit(this.character);//Si tiene valores pon el character

      this.character={ name: '', power:0};//Poner el caracter vacio de nuevo

    }
}
