import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { observer } from 'mobx-react-lite';
import store from '../store/mainStore'

import { AddMode } from './AddMode';
import { ViewMode } from './ViewMode';
import { EditMode } from './EditMode';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        width: `95%`,
        height: `95%`,
        top: `50%`,
        left: `50%`,
        border: '2px solid #000',
        transform: `translate(-50%, -50%)`,
        backgroundColor: 'white'
    }
})

export const Modal = observer(() => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            { store.state.addMode && <AddMode /> }
            { store.state.editMode && <EditMode /> }
            { store.state.viewMode && <ViewMode /> }

        </div>
    )
})