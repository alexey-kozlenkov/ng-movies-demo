import { Pipe, PipeTransform } from '@angular/core';

const countryCodeToFlag = {
  'us': '🇺🇸',
  'uk': '🇬🇧',
  'it': '🇮🇹',
  'lt': '🇱🇹',
};

@Pipe({
  name: 'countryToFlag'
})
export class CountryToFlagPipe implements PipeTransform {
  transform(code: string): string {
    return countryCodeToFlag[code] || '🤷‍♀️';
  }
}
