import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initialNames',
  standalone: true,
})
export class InitialNamesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const nameParts = value.split(' ');
    const initials = nameParts.map((part) => part.charAt(0).toUpperCase());
    return initials.join('');
  }
}
