/* eslint-disable */
import { TSTProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * style
 * Function for dynamically creating and auto-completing
 * TST design system atoms.
 * @param {DSysProp} dsysStyles
 * @param {CSS.Properties} otherStyles
 * @return {string}
 */
export default function style(
  dsysStyles: TSTProp,
  otherStyles: CSS.Properties = {},
) : string {
  const toKebab =
    (str) => str.replace(/([a-z0–9])([A-Z])/g, "$1-$2").toLowerCase();
  return `style="${
    Object.entries(dsysStyles).map((entry) => {
      const name = toKebab(entry[0]);
      const value = entry[1];
      if (value === true) {
        return `--tst-${name}: 1;`;
      }else if (!isNaN(value as any)) {
        return `--tst-${name}: ${value};`;
      }else{
        return `--tst-${name}: var( --tst-${value} );`;
      }
    }).join('\n  ')}${
    Object.entries(otherStyles).map((entry) => {
      if (!entry[0]) return '';
      const name = toKebab(entry[0]);
      return `${name}: ${entry[1]};`;
    }).join('\n  ')
  }"`;
}
