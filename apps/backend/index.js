const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

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

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`🚀 Backend ready at http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startServer();