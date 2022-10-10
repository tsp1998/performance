const server = Deno.listen({ port: 8004 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8004/`);
for await (const conn of server) {
  serveHttp(conn);
}
async function serveHttp(conn) {
  const httpConn = Deno.serveHttp(conn);
  for await (const requestEvent of httpConn) {
    const body = `Hello from deno server 1`;
    requestEvent.respondWith(
      new Response(body, {
        status: 200,
      }),
    );
  }
}