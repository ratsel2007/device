import React from 'react';
import { useFormik } from 'formik'
import { ButtonGroup } from './ButtonGroup'
import store from '../store/mainStore'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles({
    root: {
        padding: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    }
})

export const AddMode = observer(() => {
    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            id: +Date.now(),
            name: '',
            serial: '',
            buh: '',
            place: ''
        },
        onSubmit: values => {
            store.addNewDevice(values)
        }
    })

    const handleClose = () => {
        store.handleAddMode()
    }

    return (
        <form className={classes.root} onSubmit={formik.handleSubmit}>
            <div className={classes.flex}>
                <TextField
                    required
                    id="name"
                    label="Название"
                    onChange={formik.handleChange}
                    value={formik.values.name}
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
            <ButtonGroup mainText='Добавить' secText='Закрыть' close={handleClose} />
        </form>
    )
})