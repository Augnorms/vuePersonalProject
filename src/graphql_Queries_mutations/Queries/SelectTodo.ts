import gql from "graphql-tag";

export const fetchedTodo = gql`
   query{
    get_all_todos{
        id
        name
        starttime
        endtime
        date
    }
   }
`