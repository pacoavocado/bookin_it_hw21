import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($username: String!, $email: String!, $password: String!) {
    login(username: $username, email: $email, password: $password) {
      token
      user {
        username
        email
        savedBooks {
          authors
          description
          bookId
          image
          link
          title
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($newBook: Book!) {
    saveBook(newBook: $newBook) {
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

// export const DELETE_BOOK = gql`
//   mutation deleteBook($bookId: ID!) {
//     deleteBook(bookId: $bookId) {
//       username
//       email
//       savedBooks {
//         authors
//         description
//         bookId
//         image
//         link
//         title
//       }
//     }
//   }
// `;
