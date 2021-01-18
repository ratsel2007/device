import jwt from 'jsonwebtoken'

import { USER_SECRET } from './config';

export const readToken = (context) => {
    const authHeader = context.req.headers.authorization

    if(authHeader) {
        // Bearer ...
        const token = authHeader.split('Bearer ')[1]
        if(token) {
            try {
                const user = jwt.verify(token, USER_SECRET)
                return user
            } catch (e) {
                console.log(e)
            }
        }
    }

    next()
}