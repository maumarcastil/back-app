const server = require('./graphql');
const { config } = require('./config');

server.listen({ port: config.port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
