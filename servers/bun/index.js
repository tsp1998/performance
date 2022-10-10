module.exports = {
  port: 8003,
  fetch() {
    return new Response('Hello from bun server')
  }
}