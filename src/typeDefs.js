// The GraphQL schema
const { gql } = require('apollo-server');

module.exports = gql`
  type AuthResponse {
    token: String
    name: String
  }

  input AuthInput {
    accessToken: String!
  }

  type Query {
    "A simple type for getting started!"
    hello: String
  }
  
  type Mutation {
    authFacebook(input: AuthInput!): AuthResponse
    authGoogle(input: AuthInput!): AuthResponse
  }
`;
