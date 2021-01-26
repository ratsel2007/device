// Core
import React, { useContext } from 'react'
import {Link} from "react-router-dom";

// Components
import { SimpleCard } from './SimpleCard'
import { Loader } from "../../utils/Loader"

// MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

// Hooks
import { useQueryDevicesByUser } from './hooks/useQueryDevicesByUser'
import { AuthContext } from '../../utils/context/AuthContext'

const useStyles = makeStyles({
    root: {
        marginTop: 10,
        display: 'flex',
        flexWrap: 'wrap'
    },
    addButton: {
        position: 'absolute',
        bottom: 50,
        right: 50
    }
})

const Main = () => {
    const classes = useStyles()

    const { user } = useContext(AuthContext)

    const { loading, error, devices } = useQueryDevicesByUser(user.name)

    if(loading) {
        return <Loader />
    }

    if(error) {
        return <p>We have a problem: {error.message}</p>
    }

    const devicesJSX = devices && devices.map(device => {
        return <SimpleCard key={device.id} device={device} />
    })

    return (
        <>
            <Container className={classes.root}>
                { devicesJSX }
            </Container>
            <Link to='/addNewDevice' >
                <Fab className={classes.addButton} color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Link>
        </>
    );
}

export default Main;