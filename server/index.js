import Fastify from 'fastify';
import os from 'os';
import Redis from '@fastify/redis';

const fastify = Fastify({ logger: true });
fastify.register(Redis, { host: '127.0.0.1', port: 6379, closeClient: true });

fastify.get('/', async (_, reply) => {
  const { redis } = fastify;

  redis.get('numVisits', (err, numVisits) => {
    let totalNumVisits = parseInt(numVisits) + 1;
    if (isNaN(totalNumVisits)) {
      totalNumVisits = 1;
    }
    reply.send(err || os.hostname() + ': Number of visits is: ' + totalNumVisits);

    numVisits++;
    redis.set('numVisits', numVisits, err => {
      reply.send(err || { status: 'ok' });
    });
  });
});

const start = async () => {
  try {
    await fastify.listen({ port: 5000 });
  } catch (error) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
