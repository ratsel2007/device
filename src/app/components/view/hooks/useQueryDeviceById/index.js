// Core
import { useQuery } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

// Queries
const queryDeviceById = loader('./gql/queryDeviceById.graphql')

export const useQueryDeviceById = (id) => {
    const { loading, error, data } = useQuery(queryDeviceById, {
        variables: {
            id
        }
    })

    return { loading, error, device: data && data.device }
}