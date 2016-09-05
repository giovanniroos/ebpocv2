import { PipeTransform, Pipe } from 'angular2/core';
import { IMemberObject } from './objects/memberObject';

@Pipe({
    name: 'memberFilter'
})
export class MemberFilterPipe implements PipeTransform {
    transform(value: IMemberObject[], args: string[]): IMemberObject[] {
        let filter: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filter ? value.filter((product: IMemberObject) =>
            product.memberDetails.person.firstName.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
}
