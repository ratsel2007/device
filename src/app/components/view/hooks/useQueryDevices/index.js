// Core
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

// Queries
const queryDevices = loader('./gql/queryDevices.graphql')

export const useQueryDevices = () => {
    const { loading, error, data } = useQuery(queryDevices)

    const devices = data ? data.devices : null

    return { loading, error, devices }
}