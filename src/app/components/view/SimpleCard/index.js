// Core
import React from 'react'
import {Link} from 'react-router-dom'

// Hooks
import {useMutationDeleteDevice} from "../hooks/useMutationDeleteDevice"

// MaterialUI
import {makeStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
    root: {
        width: `31%`,
        margin: 10,
        whiteSpace: "normal"
    },
    pos: {
        marginTop: 5,
    },
    buttonGroup: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px"
    },
    link: {
        textDecoration: "none"
    }
})

export const SimpleCard = (props) => {
    const classes = useStyles()

    const {id, owner, title, serial, buh, place} = props.device

    const {deleteDevice} = useMutationDeleteDevice(id, owner)


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent className={classes.content}>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Серийный номер: {serial}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Инвентарный номер: {buh}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Место использования: {place}
                </Typography>

                <div className={classes.buttonGroup}>
                    <Link className={classes.link} to={`/devices/${id}`}>
                        <Button type='button' variant="contained" color="primary">
                            Подробнее
                        </Button>
                    </Link>

                    <Button type='button' variant="contained" color="secondary" onClick={() => deleteDevice()}>
                        Удалить
                    </Button>
                </div>

            </CardContent>

        </Card>
    )
}