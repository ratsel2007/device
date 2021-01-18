// Core
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http'

// GraphQL Server
const uri = 'http://localhost:4000/'
// const httpLink = createHttpLink({
//     uri: 'http://localhost:4000/'
// })

export const client = new ApolloClient({
    uri
    // link: httpLink,
    // cache: new InMemoryCache()
})
