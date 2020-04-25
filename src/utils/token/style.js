import {
  compose,
  style,
  space,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  lineHeight,
  letterSpacing,
} from "styled-system";

export const display = style({
  prop: "display",
  cssProperty: "display",
  numberToPx: false,
});

export const height = style({
  prop: "height",
  alias: "h",
  numberToPx: true,
});

export const textTransform = style({
  prop: "textTransform",
  cssProperty: "text-transform",
});

export const textDecoration = style({
  prop: "textDecoration",
  cssProperty: "text-decoration",
});

export const whiteSpace = style({
  prop: "whiteSpace",
  cssProperty: "white-space",
});

export const boxSizing = style({
  prop: "boxSizing",
  cssProperty: "box-sizing",
});

export const pxToRem = (px) => {
  const rawValue = parseInt(px);
  return `${rawValue / 16}rem`;
};

export const typography = compose(
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  letterSpacing,
  lineHeight,
  space,
  color,
  textTransform,
  textDecoration,
  whiteSpace
);
