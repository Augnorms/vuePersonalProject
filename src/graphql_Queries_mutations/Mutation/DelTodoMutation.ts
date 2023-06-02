import gql from "graphql-tag";

export const deleteTodo = gql`
  mutation deleteTodo($id:ID!){
    deleteTodo(id:$id){
      success
      messages
    }
  }
`