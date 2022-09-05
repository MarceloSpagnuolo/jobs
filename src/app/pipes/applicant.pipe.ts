import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'applicant',
})
export class ApplicantPipe implements PipeTransform {
  transform(fullName: string): string {
    let names = fullName.split(' ');
    for (let i = 0; i < names.length; i++) {
      names[i] = names[i]
        .toLowerCase()
        .split('')
        .map((letter, index) => {
          if (index % 2 === 0) {
            return letter.toUpperCase();
          }
          return letter;
        })
        .join('');
    }
    return names.join(' ');
  }
}
