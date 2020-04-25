import { generateMedia } from "styled-media-query";

import { breakpoints } from "./theme";

export default generateMedia({
  mobile: `${breakpoints[0]}`,
  tablet: `${breakpoints[1]}`,
  desktop: `${breakpoints[2]}`,
});
