import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react-lite';
import store from '../store/mainStore'

const useStyles = makeStyles({
    root: {
        minWidth: `31%`,
        margin: 10
    },
    pos: {
        marginTop: 5,
    },
});

export const SimpleCard = observer(({ item, click }) => {
    const classes = useStyles();
    const {name, serial, buh, place} = item

    const handle = () => {
        click()
        store.handleViewMode()
    }

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Серийник: {serial}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Инвентарник: {buh}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Место расположения: {place}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handle}
                >Подробнее
                </Button>
            </CardActions>
        </Card>
    )
})