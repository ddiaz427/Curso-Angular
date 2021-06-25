import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})

export class VuelaPipe implements PipeTransform{

    transform(valor: string): string {
        if(valor){
            return 'si vuela';
        }
        else{
            return 'no vuela';
        }
    }

}