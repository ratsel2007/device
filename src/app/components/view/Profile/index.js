// Core
import React from 'react';

// MaterialUI
import { ButtonGroup } from '../../ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Hooks
import { useQueryDeviceById } from '../hooks/useQueryDeviceById';

const useStyles = makeStyles({
    root: {
        padding: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    }
})

export const Profile = (props) => {
    const classes = useStyles()

    const id = props.match.params.id

    const { loading, error, device } = useQueryDeviceById(id)

    if(loading) {
        return <p>Loading...</p>
    }

    if(error) {
        return <p>We have a problem: {error.message}</p>
    }

    return (
        <>
            { device &&
            <div className={`${classes.root} ${classes.flex}`}>
                <Typography>{device.title}</Typography>
                <Typography>{device.serial}</Typography>
                <Typography>{device.buh}</Typography>
                <Typography>{device.place}</Typography>
            </div>
            }
        </>

    )
}