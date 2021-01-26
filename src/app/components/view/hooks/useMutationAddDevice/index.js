// Core
import { useMutation } from '@apollo/react-hooks'
import { loader } from 'graphql.macro'

// Queries
const DevicesByUser = loader('../useQueryDevicesByUser/gql/queryDevicesByUser.graphql')

// Mutations
const MutationAddDevice = loader('./gql/MutationAddDevice.graphql')

export const useMutationAddDevice = (device) => {
    const [ addDevice, { data } ] = useMutation(MutationAddDevice, {
        variables: {
            device
        },
        refetchQueries: [{ query: DevicesByUser, variables: { owner: device.owner } }]
    })

   return { addDevice, createdData: data }
}