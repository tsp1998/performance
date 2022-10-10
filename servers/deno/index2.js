import { serve } from "https://deno.land/std@0.159.0/http/server.ts";

const port = 8005;

const handler = (request) => {
  const body = `Hello from deno server 2`;

  return new Response(body, { status: 200 });
};

console.log(`HTTP webserver running. Access it at: http://localhost:8005/`);
await serve(handler, { port });