// Core
import React, { useContext } from 'react';
import {useFormik} from 'formik'
import {Link} from "react-router-dom"

// Apollo
import {useMutationAddDevice} from '../hooks/useMutationAddDevice'

// MaterialUI
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import { AuthContext } from '../../../utils/context/AuthContext';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        padding: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    },
    buttonGroup: {
        width: "16%",
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px"
    },
    link: {
        textDecoration: "none"
    },
    successBlock: {
        color: "red",
        fontSize: 32,
        textAlign: "center"
    }
})

export const AddDevice = () => {
    const classes = useStyles()

    const { user } = useContext(AuthContext)

    const formik = useFormik({
        initialValues: {
            type: 'Связь',
            owner: user.name,
            title: '',
            serial: '',
            buh: '',
            place: ''
        },
        onSubmit: (values, {resetForm}) => {
            addDevice()
            resetForm(formik.initialValues)
        }
    })

    const {addDevice, createdData} = useMutationAddDevice(formik.values)

    return (
        <>
            <form className={classes.root} onSubmit={formik.handleSubmit}>
                <Typography variant="h5" component="h1">Добавить новое оборудование</Typography>
                <div className={classes.flex}>
                    <TextField
                        required
                        id="title"
                        label="Название"
                        onChange={formik.handleChange}
                        value={formik.values.title}
                    />
                    <TextField
                        required
                        id="serial"
                        type="number"
                        label="Серийный номер"
                        onChange={formik.handleChange}
                        value={formik.values.serial}
                    />
                    <TextField
                        required
                        id="buh"
                        type="number"
                        label="Инвентарный номер"
                        onChange={formik.handleChange}
                        value={formik.values.buh}
                    />
                    <TextField
                        id="place"
                        label="Место установки"
                        onChange={formik.handleChange}
                        value={formik.values.place}
                    />
                </div>
                <div className={classes.buttonGroup}>
                    <Button type='submit' variant="contained" color="primary">
                        Добавить
                    </Button>
                    <Link className={classes.link} to='/'>
                        <Button type='button' variant="contained" color="secondary">
                            Закрыть
                        </Button>
                    </Link>

                </div>
            </form>
            { createdData && (
                <p className={classes.successBlock}>
                    Оборудование добавлено
                </p>
                )
            }
        </>
    )
}