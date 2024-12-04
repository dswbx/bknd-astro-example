// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
   integrations: [react()],
   /* vite: {
      optimizeDeps: {
         include: ["lodash-es"],
      },
      ssr: {
         external: ["react", "react-dom"],
         noExternal: ["bknd", "lodash-es"],
      },
   }, */
});
