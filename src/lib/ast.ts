import { Translation } from '../interfaces';

export const dts = (keys: Translation[]): string => {
  return '/* eslint-disable */\n' +
    '// DO NOT EDIT! This file is generated with "simple-i18n-dts" tool.\n'
    + 'type TranslationKey =\n\t| ' + keys.map(key => `'${key.key}'`).join('\n\t| ') + ';\n';
};
