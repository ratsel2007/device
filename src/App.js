import React from 'react';
import store from './store/mainStore'

import { makeStyles } from '@material-ui/core/styles'
import { Header } from './components/Header'
import { SimpleCard } from './components/SimpleCard'
import { Modal } from './components/Modal';

import Container from '@material-ui/core/Container'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

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

const App = observer(() => {
    const classes = useStyles()

    return (
        <>
            <Header/>
            <Container className={classes.root}>
                { toJS(store.devices).map(item => {
                    return <SimpleCard key={item.id} item={item} click={() => store.filterDevice(item.id)} />
                    })
                }
            </Container>
            <Fab className={classes.addButton} color="primary" aria-label="add" onClick={store.handleAddMode}>
                <AddIcon />
            </Fab>
            { store.state.modalMode && <Modal /> }
        </>
    );
})

export default App;
