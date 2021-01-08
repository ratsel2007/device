import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        position: 'absolute',
        bottom: 50,
        right: 50,
        width: 220,
        display: 'flex',
        justifyContent: 'space-between'
    }
})

export const ButtonGroup = ({ mainText, secText, edit, close }) => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Button type='submit' variant="contained" color="primary" onClick={edit}>
                {mainText}
            </Button>
            <Button type='button' variant="contained" color="secondary" onClick={close}>
                {secText}
            </Button>
        </div>
    );
};