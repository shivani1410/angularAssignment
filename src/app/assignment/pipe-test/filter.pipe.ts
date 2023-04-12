import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string,property:string): any {
    if(value.length===0 || filterString.length===0){
      return value;
    }
   const filterArray=[]
    for(let val of value){
      console.log(val+'   '+filterString)
      if(val[property]===filterString){
        filterArray.push(val);
      }
    }
    return filterArray;
  }

}
