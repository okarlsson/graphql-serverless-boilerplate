import { gql } from 'apollo-server-express';

const typeDefs = gql`
    
    type HelloWorld{
        id: Int!
        message: String
    }

    type Query {
        helloWorld(id: Int!): HelloWorld
    }
`;

export { typeDefs }