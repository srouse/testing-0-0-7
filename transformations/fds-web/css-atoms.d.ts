import {
  TSTColorValue,
  TSTTypeValue,
  TSTEffectValue,
  TSTSpacingValue,
} from './css-vars';

export type TSTProp = {
  alignmentCenter?: true,
  alignmentCenterCenter?: true,
  alignmentCenterLeft?: true,
  alignmentLeftCenter?: true,
  alignmentCenterRight?: true,
  alignmentRightCenter?: true,
  alignmentTop?: true,
  alignmentTopLeft?: true,
  alignmentLeftTop?: true,
  alignmentLeft?: true,
  alignmentTopCenter?: true,
  alignmentCenterTop?: true,
  alignmentTopRight?: true,
  alignmentRightTop?: true,
  alignmentRight?: true,
  alignmentBottomLeft?: true,
  alignmentLeftBottom?: true,
  alignmentBottom?: true,
  alignmentBottomCenter?: true,
  alignmentCenterBottom?: true,
  alignmentBottomRight?: true,
  alignmentRightBottom?: true,
  alignmentStretch?: true,
  alignmentStretchLeft?: true,
  alignmentLeftStretch?: true,
  alignmentStretchTop?: true,
  alignmentTopStretch?: true,
  alignmentStretchRight?: true,
  alignmentRightStretch?: true,
  alignmentStretchBottom?: true,
  alignmentBottomStretch?: true,
  alignmentStretchCenter?: true,
  alignmentCenterStretch?: true,
  baseline?: true,
  alignmentBaselineLeft?: true,
  alignmentLeftBaseline?: true,
  alignmentBaselineRight?: true,
  alignmentRightBaseline?: true,
  alignmentBaselineCenter?: true,
  alignmentCenterBaseline?: true,
  backgroundColor?: TSTColorValue,
  backgroundColorHover?: TSTColorValue,
  color?: TSTColorValue,
  colorHover?: TSTColorValue,
  borderColor?: TSTColorValue,
  border?: TSTColorValue,
  borderTop?: TSTColorValue,
  borderBottom?: TSTColorValue,
  borderLeft?: TSTColorValue,
  borderRight?: TSTColorValue,
  font?: TSTTypeValue,
  element?: true,
  layout?: true,
  text?: true,
  stack?: true,
  flexH?: true,
  flexV?: true,
  center?: true,
  float?: true,
  size?: TSTSpacingValue,
  maxSize?: TSTSpacingValue,
  minSize?: TSTSpacingValue,
  width?: TSTSpacingValue,
  maxWidth?: TSTSpacingValue,
  minWidth?: TSTSpacingValue,
  height?: TSTSpacingValue,
  maxHeight?: TSTSpacingValue,
  minHeight?: TSTSpacingValue,
  left?: TSTSpacingValue,
  right?: TSTSpacingValue,
  top?: TSTSpacingValue,
  bottom?: TSTSpacingValue,
  margin?: TSTSpacingValue,
  marginLeft?: TSTSpacingValue,
  marginRight?: TSTSpacingValue,
  marginTop?: TSTSpacingValue,
  marginBottom?: TSTSpacingValue,
  marginWidth?: TSTSpacingValue,
  marginX?: TSTSpacingValue,
  marginHeight?: TSTSpacingValue,
  marginY?: TSTSpacingValue,
  padding?: TSTSpacingValue,
  paddingLeft?: TSTSpacingValue,
  paddingRight?: TSTSpacingValue,
  paddingTop?: TSTSpacingValue,
  paddingBottom?: TSTSpacingValue,
  paddingWidth?: TSTSpacingValue,
  paddingX?: TSTSpacingValue,
  paddingHeight?: TSTSpacingValue,
  paddingY?: TSTSpacingValue,
  borderRadius?: TSTSpacingValue,
  gap?: TSTSpacingValue,
  fill?: TSTSpacingValue,
  shadow?: TSTEffectValue,
  blur?: TSTEffectValue,
}