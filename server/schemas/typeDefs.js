const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User{
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks: [Book]
    password: String
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String

  }

  type Query  {
    me: User
  }

  type Auth {
    token: ID!
    user: User

  }

  input BookInput{
    bookId: String!
    authors: [String]
    description: String
    title: String!
    image: String
    link: String
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    # Define the required parameters for updating a class
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;