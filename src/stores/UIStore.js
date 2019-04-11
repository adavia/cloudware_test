import { observable, action } from 'mobx';

class UIStore {
    @observable sidebar = false;
    @observable.shallow checkboxes = this.OPTIONS.reduce((acc, option) => {
        return { ...acc, [option]: true } 
    }, {});
    @observable.shallow modal = {
        show: false,
        body: null
    }

    constructor() {
        this.OPTIONS = [
            'user',
            'gender',
            'title',
            'name',
            'email',
            'phone',
            'cell'
        ]
    }

    @action.bound
    showSidebar() {       
        this.sidebar = !this.sidebar;
    }

    @action.bound
    setCheckbox(name) {       
        this.checkboxes[name] = !this.checkboxes[name];
    }

    @action.bound
    toggleModal(body = null) {
        this.modal.show = !this.modal.show;
		this.modal.body = body;
    }
}

export const uiStore = new UIStore();