// Core
import React from "react"
import {Link} from "react-router-dom"

// MaterialUI
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        padding: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    },
    pos: {
        marginTop: 5,
    },
    buttonGroup: {
        width: "20%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px"
    },
    link: {
        textDecoration: "none"
    }
})


export const ViewMode = ({ device, handleEdit }) => {
    const classes = useStyles()

    const { title, serial, buh, place } = device

    return (
        <>
            <div className={classes.root}>
                <Typography variant="h5" component="h1">{title}</Typography>
                <Typography className={classes.pos} color="textSecondary">Сериный номер: {serial}</Typography>
                <Typography className={classes.pos} color="textSecondary">Инвентарный номер: {buh}</Typography>
                <Typography className={classes.pos} color="textSecondary">Место использования: {place}</Typography>

                <div className={classes.buttonGroup}>
                    <Button type='button' variant="contained" color="primary" onClick={handleEdit}>
                        Редактировать
                    </Button>
                    <Link className={classes.link} to='/'>
                        <Button type='button' variant="contained" color="secondary">
                            Закрыть
                        </Button>
                    </Link>

                </div>
            </div>



        </>
    )
}
