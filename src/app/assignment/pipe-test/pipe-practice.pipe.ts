import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'practice'
})
export class PipePracticePipe implements PipeTransform{
    transform(value: any) {
        if(value.length>2){
            return value.substr(0,2)+"...";
        }
        return value;
    }
}