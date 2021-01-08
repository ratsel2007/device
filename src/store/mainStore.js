import { makeAutoObservable } from 'mobx';

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }

    state = {
        viewMode: false,
        editMode: false,
        addMode: false,
        modalMode: false
    }

    devices = [
        {id: 1, type: 'Связь', name: 'ТАКТ 301П23', serial: 1356135, buh: 215651566, place: 'Караул'},
        {id: 2, type: 'Связь', name: 'ТАКТ 101П23', serial: 1466135, buh: 685651566, place: 'ДЧ'},
        {id: 3, type: 'ТСОН', name: 'SAF Auto', serial: 1350935, buh: 2156748566, place: 'Вход'},
        {id: 4, type: 'ТСОН', name: 'Енисей-СП', serial: 7886135, buh: 2153425566, place: 'КАМАЗ'}
    ]

    singleDevice = {}

    handleAddMode = () => {
        this.state.modalMode = !this.state.modalMode
        this.state.addMode = !this.state.addMode
    }

    handleViewMode = () => {
        this.state.modalMode = !this.state.modalMode
        this.state.viewMode = !this.state.viewMode
    }

    handleEditMode = () => {
        this.state.editMode = !this.state.editMode
        this.state.viewMode = !this.state.viewMode
    }

    addNewDevice = (item) => {
        this.devices.push(item)
    }

    filterDevice = (id) => {
        this.singleDevice = this.devices.filter(item => item.id === id)
    }

    editDevice = (id) => {
        this.devices = this.devices.filter(item => item.id !== id)

    }

}

export default new MainStore()