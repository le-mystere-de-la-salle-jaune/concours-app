import { Pipe, PipeTransform } from '@angular/core';
import {Concours} from './domains'
import { element } from 'protractor';

@Pipe({
  name: 'libelleConcour'
})
export class LibelleConcourPipe implements PipeTransform {

  transform(value:Concours[], args: string): Concours[] {
    
     return (args === undefined)?value : value.filter((element:Concours)=>{ return element.titre.includes(args)  })
  }

}
