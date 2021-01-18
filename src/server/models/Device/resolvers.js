// import { _addDevice, _deleteDevice, _updateDevice, getDeviceById, getDevices } from './Model';
//
// export const resolvers = {
//     Query: {
//         devices: () => getDevices(),
//         device: (_, { id }) => getDeviceById(id)
//     },
//     Mutation: {
//         addDevice: (_, { device }) => _addDevice(device),
//         updateDevice: (_, { id, device }) => _updateDevice(id, device),
//         deleteDevice: (_, { id }) => _deleteDevice(id)
//     }
// }