import { serve } from "bknd/adapter/astro";

export const prerender = false;

export const ALL = serve({
   connection: {
      type: "libsql",
      config: {
         url: "http://127.0.0.1:8080"
      }
   }
});
