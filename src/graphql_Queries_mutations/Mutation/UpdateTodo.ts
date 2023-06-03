import gql from "graphql-tag";

export const updateTodo = gql`
   mutation($id:ID!, $name:String, $starttime:String, $endtime:String, $date:String){
        updateTodo(id:$id, name:$name, starttime:$starttime, endtime:$endtime, date:$date){
            success
            messages
        }
   }
`