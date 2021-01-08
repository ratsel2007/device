import React from 'react';
import { useFormik } from 'formik'
import { ButtonGroup } from './ButtonGroup'
import store from '../store/mainStore'

import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';

const useStyles = makeStyles({
    root: {
        padding: 15
    },
    flex: {
        display: 'flex',
        flexDirection: 'column'
    }
})

export const EditMode = observer(() => {
    const {id, name, serial, buh, place} = toJS(store.singleDevice)[0]

    const classes = useStyles()
    const formik = useFormik({
        initialValues: {
            id,
            name,
            serial,
            buh,
            place
        },
        onSubmit: values => {
            store.editDevice(id)
            store.addNewDevice(values)
            store.handleEditMode()
            store.handleViewMode()
        }
    })

    const handleClose = () => {
        store.handleEditMode()
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
            <ButtonGroup mainText='Сохранить' secText='Отмена' close={handleClose} />
        </form>
    )
})