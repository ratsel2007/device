import { ApolloServer, PubSub } from 'apollo-server'
import schema from './types.graphql'
import { resolvers } from './resolvers'

export const pubSub = new PubSub()

const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: ({ req, res }) => ({ req, res , pubSub})
})

export { server }