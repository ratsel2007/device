// Core
import mongoose from 'mongoose'

// Config
import { PORT, URL } from './init/config'

// Apollo
import { server } from './init/server'

mongoose.set('useFindAndModify', false)

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('database connected')
        server.listen()
    })
    .then(()=> {
        console.log(`server is running at http://localhost:${PORT}${server.graphqlPath}`)
    })