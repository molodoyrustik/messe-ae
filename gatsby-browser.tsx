import * as React from "react";
import { Providers } from "./src/components/Providers";
import type { GatsbyBrowser } from "gatsby";

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <Providers>{element}</Providers>;
};
