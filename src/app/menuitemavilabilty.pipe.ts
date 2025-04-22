import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menuitemavilabilty'
})
export class MenuitemavilabiltyPipe implements PipeTransform {

  transform(available: boolean): String {

    if (!available) {
      return 'Item is not available temporarily'; // When item is not available
    }
    return 'Item is available'; // When item is available
  }

}
