/* eslint-disable */
import { TSTProp } from "./css-atoms";
import type * as CSS from 'csstype';

/**
 * TST
 * Function for dynamically creating and auto-completing
 * TST design system files.
 * @param {DSysProp} dsysStyles
 * @param {Object} CSS.Properties
 * @return {CSS.Properties}
 */
export default function tst(
  dsysStyles: TSTProp,
  otherStyles: CSS.Properties = {},
) : CSS.Properties {
  const dsysStylesObj: {[key:`--TST-${string}`]: string} = {};
  Object.entries(dsysStyles).map((entry) => {
    if (entry[1] === true) {
      dsysStylesObj[`--tst-${entry[0]}`] = '1';
    }else{
      dsysStylesObj[`--tst-${entry[0]}`] = `var( --tst-${entry[1]} )`;
    }
  });
  return {
    ...dsysStylesObj,
    ...otherStyles,
  };
}
