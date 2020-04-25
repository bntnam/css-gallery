import styled from "styled-components";
import {
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  textAlign,
  display,
  space,
  position,
} from "styled-system";

import { typography, textTransform, pxToRem } from "./style";

export const fontSizes = {
  l: pxToRem("48px"),
  m: pxToRem("36px"),
  s: pxToRem("17px"),
};

export const fontWeights = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const fonts = {
  primary: '"Luckiest Guy", sans-serif',
  secondary: '"Helvetica Neue", sans-serif',
};

export const BaseText = styled.p(
  typography,
  textTransform,
  textAlign,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  display,
  space,
  position
);

const headingStyles = {
  fontFamily: "primary",
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
  lineHeight: "normal",
  color: "amour",
  my: "0px",
};

export const textStyles = {
  fontFamily: "secondary",
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: "normal",
  lineHeight: "normal",
  color: "amour",
  my: "0px",
};

export const typographyStyles = {
  heading: {
    ...headingStyles,
    fontSize: "l",
    as: "h1",
  },
  subheading: {
    ...headingStyles,
    fontSize: "m",
    as: "h2",
  },
  bodyText: {
    ...textStyles,
    fontSize: "s",
  },
};

export const Heading = styled(BaseText)({});
Heading.defaultProps = typographyStyles.heading;

export const Subheading = styled(BaseText)({});
Subheading.defaultProps = typographyStyles.subheading;

export const BodyText = styled(BaseText)({});
BodyText.defaultProps = typographyStyles.bodyText;
