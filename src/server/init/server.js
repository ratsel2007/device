import { ApolloServer } from 'apollo-server'
import schema from './types.graphql'
import { resolvers } from './resolvers'

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: ({ req, res }) => ({req, res})
})

export { server }