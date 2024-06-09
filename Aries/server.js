// Import Fastify
const fastify = require('fastify')({ logger: true });

// Declare a route
fastify.get('/api', async (request, reply) => {
  return { message: 'Hello from Fastify!' };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(5000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();


//CORS Registration
fastify.register(require('fastify-cors'), {
    // Configure CORS options here
    origin: true
  });
  