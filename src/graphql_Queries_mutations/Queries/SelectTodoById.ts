import gql from "graphql-tag";

export const selectTodoById = gql`
    query($id:ID!){
        getTodoById(id:$id){
            id
            name
            starttime
            endtime
            date
        }
    }
`