import { model, Schema } from 'mongoose'

import { pubSub } from '../../init/server'
import { events } from './events';

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

export const getDevicesByUser = async (owner) => {
    try {
        return await Model.find({ owner })
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
        const newDevice = new Model({
            ...device
        })
        await pubSub.publish(events.DEVICE_ADDED, {
            device
        })
        return await newDevice.save()
    } catch (e) {
        console.log(e)
    }
}

export const _updateDevice = async (id, device) => {
    try {
        await pubSub.publish(events.DEVICE_UPDATE, {
            device
        })
        return await Model.findByIdAndUpdate(id, device)
    } catch (e) {
        console.log(e)
    }
}

export const _deleteDevice = async (id) => {
    try {
        const device = await Model.findByIdAndDelete(id)
        await pubSub.publish(events.DEVICE_DELETE, {
            device
        })
        return device
    } catch (e) {
        console.log(e)
    }
}