import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import express from "express";

import { typeDefs, resolvers } from "./server/schemas/schema";

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
const memberFacebook = {
  id: 111,
  name: "Daniel Hartono",
  email: "niel.heo@gmail.com",
  accessToken: "Daniel Access Token",
  userId: "Daniel User Id",
  signedRequest: "Daniel signedRequest"
};

const member = {
  id: 1,
  name: "Daniel Hartono",
  email: "niel.heo@gmail.com",
  active: true,
  memberFacebook: memberFacebook
};

const app = express();

var corsOptions = {
  origin: function(origin, callback) {
    //var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, true);
  },
  credentials: true
};
app.use(cors(corsOptions));

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
