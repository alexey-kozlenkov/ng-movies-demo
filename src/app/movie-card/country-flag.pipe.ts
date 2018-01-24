import { Pipe, PipeTransform } from '@angular/core';

const languageCodeToFlag = {
  'en': '🇺🇸',
  'it': '🇮🇹',
  'lt': '🇱🇹',
};

@Pipe({
  name: 'languageToFlag'
})
export class LanguageToFlagPipe implements PipeTransform {
  transform(code: string): string {
    return languageCodeToFlag[code] || '🤷‍♀️';
  }
}
