// Core
import { model, Schema } from 'mongoose'

// Autenfication
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { USER_SECRET } from '../../init/config'

const userSchema = new Schema({
    name: String,
    username: String,
    password: String,
    token: String
})

export const User = model('User', userSchema)

export const getUsers = async () => {
    try {
        return User.find()
    } catch (e) {
        console.log(e)
    }
}

export const _register = async ({ name, username, password }) => {
    try {
        const cryptPassword = await bcrypt.hash(password, 12)
        const newUser = new User({
            name,
            username,
            password: cryptPassword
        })
        const res = await newUser.save()

        const token = jwt.sign({
            id: res.id,
            name: res.name,
            username: res.username
        }, USER_SECRET,{ expiresIn: '1h' })

        return {
            ...res._doc,
            id: res._id,
            token
        }
    } catch (e) {
        console.log(e)
    }
}

export const _logIn = async (username, password) => {
    try {
        const user = await User.findOne({ username })
        if(!user) {
            throw new Error('User is not found')
        }

        const match = bcrypt.compare(password, user.password)
        if(!match) {
            throw new Error('Wrong credentials')
        }

        const token = jwt.sign({
            id: user.id,
            name: user.name,
            username: user.username
        }, USER_SECRET,{ expiresIn: '1h' })

        return {
            ...user._doc,
            id: user._id,
            token
        }
    } catch (e) {
        console.log(e)
    }
}