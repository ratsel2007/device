// Core
import { useMutation } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

// Queries
const DevicesById = loader('../useQueryDeviceById/gql/queryDeviceById.graphql')

// Mutations
const MutationEditDevice = loader('./gql/MutationEditDevice.graphql')

export const useMutationEditDevice = (id, device) => {
    const [ editDevice, { data } ] = useMutation(MutationEditDevice, {
        variables: {
            id,
            device
        },
        refetchQueries: [{ query: DevicesById, variables: { id } }]
    })



    return { editDevice, editData: data }
}