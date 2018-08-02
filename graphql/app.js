import { ApolloServer, gql } from "apollo-server-express";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";

import { typeDefs, resolvers } from "./server/schemas/schema";
import authFacebook from "./server/controllers/authFacebook";

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.

const app = express();

var corsOptions = {
  origin: function(origin, callback) {
    //var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, true);
  },
  credentials: true
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(authFacebook);
app.use(cors(corsOptions));

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app }); // app is from an existing express app

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
