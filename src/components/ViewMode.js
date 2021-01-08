import React from 'react';
import { observer } from 'mobx-react-lite'
import store from '../store/mainStore'
import { toJS } from 'mobx';
import { ButtonGroup } from './ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    }
})

export const ViewMode = observer(() => {
    const {name, serial, buh, place} = toJS(store.singleDevice)[0]

    const classes = useStyles()

    const handleClose = () => {
        store.handleViewMode()
    }

    const handleEditMode = () => {
        store.handleEditMode()
    }

    return (
        <div className={`${classes.root} ${classes.flex}`}>
            <Typography>{name}</Typography>
            <Typography>{serial}</Typography>

            <ButtonGroup mainText='Изменить' secText='Закрыть' edit={handleEditMode} close={handleClose} />
        </div>
    )
})