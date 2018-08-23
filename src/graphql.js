const { ApolloServer } = require('apollo-server-lambda');
 
// Construct a schema, using GraphQL schema language
const typeDefs = require("types/hello");
 
// Provide resolver functions for your schema fields
const resolvers = require("resolvers/hello");
 
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ event, context }) => ({
    headers: event.headers,
    functionName: context.functionName,
    event,
    context,
  }),
});
 
module.exports.graphql = server.createHandler();