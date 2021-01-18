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