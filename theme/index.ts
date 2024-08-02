import { extendTheme } from "@chakra-ui/react";

import colors from "./colors";
import components from "./components";
import fonts from "./components";

const overrides = {
  colors,
  components,
  fonts,
};

export default extendTheme(overrides);
