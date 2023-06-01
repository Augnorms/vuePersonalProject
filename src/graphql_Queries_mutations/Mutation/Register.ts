import gql from "graphql-tag";

export const createUser = gql`
     mutation($name:String!, $username:String!, $email:String!, $password:String!, $confirmPasword:String!){
        createUser(name:$name, username:$username, email:$email, password:$password, passwordtwo:$confirmPasword){
          success
          Messages
        }
     }
`