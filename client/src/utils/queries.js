import { gql } from '@apollo/client';

export const QUERY_ME = gql`
query me {
  mr {
      _id
      username
      email
      bookCount
      savedBooks {
          bookId
          authors
          description
          title
          image
          link
      }
  }  
}
`;