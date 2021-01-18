// Core
import React from 'react'

// Components
import { Header } from '../Header'
import { SimpleCard } from './SimpleCard'
import { Modal } from '../Modal'

// MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

// Hooks
import { useQueryDevices } from './hooks/useQueryDevices'

import store from '../../store/mainStore'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

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

const Main = observer(() => {
    const classes = useStyles()

    const { loading, error, devices } = useQueryDevices()
    if(loading) {
        return <p>Loading...</p>
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
            <Fab className={classes.addButton} color="primary" aria-label="add" onClick={store.handleAddMode}>
                <AddIcon />
            </Fab>
            { store.state.modalMode && <Modal /> }
        </>
    );
})

export default Main;