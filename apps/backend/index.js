const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 4000;

// Basic GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello from GraphQL backend!',
  },
};

async function startServer() {
  const app = express();
  app.use(cors());

  // ✅ Health check route for Fly.io
  app.get('/health', (req, res) => {
    res.status(200).send('OK');
  });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true, // allows GET /graphql
  });

  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`🚀 Backend ready at http://0.0.0.0:${PORT}${server.graphqlPath}`);
    console.log(`✅ Health check available at http://0.0.0.0:${PORT}/health`);
  });
}

startServer();
