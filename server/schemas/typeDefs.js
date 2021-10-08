const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    username: String!
    email: String!
    password: String!
    savedBooks: [ Book ]
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
    users: [ User ]
    me: User
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(newBook: Book!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
