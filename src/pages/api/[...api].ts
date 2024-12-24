import { serve } from "bknd/adapter/astro";

export const prerender = false;

// this is only added to access the local database created by astro db
// it's just a workaround, will add a better API for that.
//
// for production, to use a remote database, you can use the commented code below

export const ALL = serve({
   connection: {
      type: "libsql",
      config: {
         url: "file:.astro/content.db"
      }
   },
});

/*
// use this to point to a remote database
export const ALL = serve({
   connection: {
      type: "libsql",
      config: {
         url: "http://127.0.0.1:8080"
      }
   }
});
*/
