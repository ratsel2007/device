// Core
import React, {useState} from 'react'

// Components
import { ViewMode } from "./ViewMode"
import { EditMode } from "./EditMode"
import {Loader} from "../../../utils/Loader";

// Hooks
import { useQueryDeviceById } from '../hooks/useQueryDeviceById'


export const Profile = (props) => {
    const [edit, setEdit] = useState(false)

    const id = props.match.params.id

    const { loading, error, device } = useQueryDeviceById(id)

    const handleEdit = () => {
        setEdit(prev => !prev)
    }

    if(loading) {
        return <Loader />
    }

    if(error) {
        return <p>We have a problem: {error.message}</p>
    }

    return (
        <>
            { (device && edit) && <EditMode device={device} handleEdit={() => handleEdit()} /> }
            { (device && !edit) && <ViewMode device={device} handleEdit={() => handleEdit()} /> }
        </>
    )
}