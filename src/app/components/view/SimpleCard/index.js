// Core
import React from 'react'
import { Link } from 'react-router-dom'

// MaterialUI
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { observer } from 'mobx-react-lite'
import store from '../../../store/mainStore'

const useStyles = makeStyles({
    root: {
        minWidth: `31%`,
        margin: 10
    },
    pos: {
        marginTop: 5,
    },
    buttons: {
        position: 'absolute',
        bottom: 50,
        right: 50,
        width: 220,
        display: 'flex',
        justifyContent: 'space-between'
    }
});

export const SimpleCard = ({ device }) => {
    const classes = useStyles();

    const { id, title, serial, buh, place } = device


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
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

                <div>
                    <Link to={`/devices/${id}`}>
                       Подробнее
                    </Link>
                    <Button type='button' variant="contained" color="secondary">
                        Удалить
                    </Button>
                </div>

            </CardContent>

        </Card>
    )
}