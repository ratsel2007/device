// Core
import React from 'react';
import { useFormik } from 'formik'

// Hooks
import {useMutationEditDevice} from "../../hooks/useMutationEditDevice";

// materialUI
import {makeStyles} from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    root: {
        padding: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
      marginBottom: 10
    },
    buttonGroup: {
        width: '26%',
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

export const EditMode = ({device, handleEdit}) => {
    const classes = useStyles()

    const { id, owner, type, title, serial, buh, place } = device

    const formik = useFormik({
        initialValues: {
            owner,
            type,
            title,
            serial,
            buh,
            place
        },
        onSubmit: values => {
            editDevice()
        }
    })

    const { editDevice, editData } = useMutationEditDevice(id, formik.values)

    return (
        <form className={classes.root} onSubmit={formik.handleSubmit}>
            <Typography className={classes.title} variant="h5" component="h1">Редактирование данных</Typography>
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
                    Сохранить
                </Button>
                <Button type='button' variant="contained" color="secondary" onClick={handleEdit}>
                    Назад
                </Button>
                <Link className={classes.link} to='/'>
                    <Button type='button' variant="contained" color="secondary">
                        На главную
                    </Button>
                </Link>
            </div>
            {
                editData &&
                <p className={classes.successBlock}>Данные обновлены</p>
            }
        </form>
    )
}