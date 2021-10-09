const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    savedBooks: [ Book ]
  }
  
  input SearchBook {
    authors: [ String ]
    description: String!
    bookId: ID!
    image: String!
    link: String!
    title: String!
  }

  type Book {
    authors: [ String ]
    description: String!
    bookId: ID!
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
    saveBook(newBook: SearchBook!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
