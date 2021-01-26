// Core
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

//MaterialUI
import { makeStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Button from '@material-ui/core/Button'

// Other
import { AuthContext } from '../utils/context/AuthContext'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: "30px",
        position: "static",
        backgroundColor: "#3f51b5",
        color: '#fff'
    },
    link: {
        textDecoration: "none"
    }
}));

export const Header = () => {
    const { user, logout } = useContext(AuthContext)

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.appBar}>
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {user ? user.name : 'Необходимо войти под своим пользователем'}
                    </Typography>
                </Toolbar>
                { user ?
                    <Button type='button' variant="contained" color="secondary" onClick={logout}>
                        Выйти
                    </Button> :
                    <Link className={classes.link} to='/login'>
                        <Button type='button' variant="contained" color="secondary" onClick={logout}>
                            Войти
                        </Button>
                    </Link>
                }
            </div>
        </div>
    )
};