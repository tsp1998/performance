const fastify = require('fastify')()
fastify.get('/', (request, reply) => {
  reply.send('Hello from fastify server')
})
fastify.listen({ port: 8002 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})