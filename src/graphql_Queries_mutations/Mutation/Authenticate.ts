import gql from "graphql-tag";


export const authenticateUser = gql`
    mutation($username:String!, $password:String!){
        authenticateUser(username:$username, password:$password){
            Messages
            success
            token
        }
        
    }
`