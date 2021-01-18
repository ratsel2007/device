import {
    getDevices,
    getDeviceById,
    _addDevice,
    _deleteDevice,
    _updateDevice
} from '../models/Device/Model'
import {
    getUsers,
    _register,
    _logIn
} from '../models/User/Model'

export const resolvers = {
    // Query: {
    //     ...deviceResolvers.Query,
    //     ...userResolvers.Query
    // },
    // Mutation: {
    //     ...deviceResolvers.Mutation,
    //     ...userResolvers.Mutation
    // }
    Query: {
        devices: () => getDevices(),
        device: (_, { id }) => getDeviceById(id),
        users: (_, __, context) => {
            if(context.req.username) {
                return getUsers()
            } else {
                return getUsers()
                    .then(res => res.map(({ name, username }) => ({
                        name,
                        username,
                        password: null
                    })))
            }
        }
    },
    Mutation: {
        addDevice: (_, { device }) => _addDevice(device),
        updateDevice: (_, { id, device }) => _updateDevice(id, device),
        deleteDevice: (_, { id }) => _deleteDevice(id),
        register:(_, {  registerInput } ) => _register(registerInput),
        logIn: (_, { username, password }, context) => _logIn(username, password, context)
    }
}