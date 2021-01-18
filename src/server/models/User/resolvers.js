// import { _logIn, getUsers } from './Model';
//
// export const resolvers = {
//     Query: {
//         users: (_, __, context) => {
//             if(context.req.username) {
//                 return getUsers()
//             } else {
//                 return getUsers()
//                     .then(res => res.map(({ name, username }) => ({
//                         name,
//                         username,
//                         password: null
//                     })))
//             }
//         }
//     },
//     Mutation: {
//         logIn: (_, { username, password }, context) => _logIn(username, password, context)
//     }
// }