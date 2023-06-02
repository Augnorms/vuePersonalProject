import gql from "graphql-tag";

export const createTodo = gql`
   mutation($name:String!, $starttime:String!, $endtime:String!, $date:String!){
      createTodo(name:$name, starttime:$starttime, endtime:$endtime, date:$date){
        success
        messages
      }
   }
`