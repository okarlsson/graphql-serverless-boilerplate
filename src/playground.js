import lambdaPlayground from 'graphql-playground-middleware-lambda';

exports.handler = lambdaPlayground({
  endpoint: 'graphql',
});
