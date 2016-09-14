import { PipeTransform, Pipe } from 'angular2/core';
import { ISchemeDetailsObject } from './objects/schemeDetailsObject';

@Pipe({
    name: 'schemeFilter'
})
export class SchemeFilterPipe implements PipeTransform {
    transform(value: ISchemeDetailsObject[], args: string[]): ISchemeDetailsObject[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: ISchemeDetailsObject) =>
            product.scheme.schemeNo.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}