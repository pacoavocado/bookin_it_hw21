const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [Book]
  }

  type searchBook {
    authors: [String]
    description: String
    bookId: ID!
    image: String
    link: String
    title: String
  }

  type Book {
    authors: [ String ]
    description: String!
    bookId: String!
    image: String!
    link: String!
    title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: searchBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
