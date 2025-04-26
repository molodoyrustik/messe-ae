import * as React from "react";
import { Providers } from "./src/components/Providers";
import type { GatsbySSR } from "gatsby";

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <Providers>{element}</Providers>;
};
