import { model, Schema } from 'mongoose'

const deviceSchema = new Schema({
    owner: String,
    type: String,
    title: String,
    serial: Number,
    buh: Number,
    place: String
})

const Model = model('Device', deviceSchema)

export const getDevices = async () => {
    try {
        return await Model.find()
    } catch (e) {
        console.log(e)
    }
}

export const getDeviceById = async (id) => {
    try {
        return await Model.findById(id)
    } catch (e) {
        console.log(e)
    }
}

export const _addDevice = async (device) => {
    try {
        console.log(device)
        return await Model.create(device)
    } catch (e) {
        console.log(e)
    }
}

export const _updateDevice = async (id, device) => {
    try {
        return await Model.findByIdAndUpdate(id, device)
    } catch (e) {
        console.log(e)
    }
}

export const _deleteDevice = async (id) => {
    try {
        return await Model.findByIdAndDelete(id)
    } catch (e) {
        console.log(e)
    }
}