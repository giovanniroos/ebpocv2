import { PipeTransform, Pipe } from 'angular2/core';
import { ISchemeObject } from './schemeObject';

@Pipe({
    name: 'schemeFilter'
})
export class SchemeFilterPipe implements PipeTransform {
    transform(value: ISchemeObject[], args: string[]): ISchemeObject[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: ISchemeObject) =>
            product.schemeDetails.scheme.schemeNo.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
