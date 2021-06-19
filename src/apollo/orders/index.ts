import { gql } from '@apollo/client';

const getAllOrdersByBasic = gql`
  query GetAllOrders {
    orders {
      id
      user_id
      itemName
      description
      number
    }
  }
`;

const getAllOrdersByCurrentUserId = gql`
  query GetMyOrders {
    orders_connection(
      where: { user_id: { _eq: "auth0|60bc36b7c6a5fa006b943981" } }
    ) {
      edges {
        node {
          itemName
          number
        }
      }
    }
  }
`;

const ADD_ORDERS = gql`
  mutation InsertOrders(
    $user_id: String!
    $createdAt: String!
    $delivered: Boolean!
    $description: String!
    $itemName: String!
    $number: Int!
    $updateAt: String!
  ) {
    insert_orders_one(
      object: {
        user_id: $user_id
        delivered: $delivered
        description: $description
        itemName: $itemName
        number: $number
        createdAt: $createdAt
        updatedAt: $updateAt
      }
    ) {
      user_id
      delivered
      description
      itemName
      number
      createdAt
      updatedAt
    }
  }
`;

export { ADD_ORDERS, getAllOrdersByBasic, getAllOrdersByCurrentUserId };
