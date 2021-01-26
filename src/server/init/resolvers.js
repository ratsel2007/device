import { queries as userQueries } from '../models/User/queries'
import { queries as deviceQueries } from '../models/Device/queries'

import { mutations as userMutations } from '../models/User/mutations'
import { mutations as deviceMutations } from '../models/Device/mutations'

import { subscriptions as deviceSubscriptions } from '../models/Device/subscriptions';

export const resolvers = {
    Query: {
        ...userQueries,
        ...deviceQueries
    },
    Mutation: {
        ...userMutations,
        ...deviceMutations
    },
    Subscription: {
        ...deviceSubscriptions
    }
}