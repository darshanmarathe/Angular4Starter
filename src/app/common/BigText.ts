import {Pipe, PipeTransform} from '@angular/core'


@Pipe({
    name:'bigtext'
})

export class BigTextPipe implements PipeTransform {
    transform(value: string, args: number) {
      
        if(value.length > args){
              return  value.substr(0 , (args -3)) + "...";
        }

       return value;
    }
}