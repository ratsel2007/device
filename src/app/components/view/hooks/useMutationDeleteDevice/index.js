// Core
import { useMutation } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

// Queries
const DevicesByUser = loader('../useQueryDevicesByUser/gql/queryDevicesByUser.graphql')

// Mutations
const MutationDeleteDevice = loader('./gql/MutationDeleteDevice.graphql')

export const useMutationDeleteDevice = (id, owner) => {
    const [ deleteDevice, { data } ] = useMutation(MutationDeleteDevice, {
        variables: {
            id
        },
        refetchQueries: [{ query: DevicesByUser, variables: { owner } }]
    })

    return { deleteDevice }
}