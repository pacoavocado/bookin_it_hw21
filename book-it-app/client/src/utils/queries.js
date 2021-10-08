import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    me {
      _id
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

// export const QUERY_MATCHUPS = gql`
//   query getAllMatchups {
//     matchups {
//       _id
//       tech1
//       tech2
//     }
//   }
// `;

// export const QUERY_MATCHUP = gql`
//   query getMatchup($_id: ID!) {
//     matchup(_id: $_id) {
//       _id
//       tech1
//       tech2
//       tech1_votes
//       tech2_votes
//     }
//   }
// `;
