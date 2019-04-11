import { observable, action, runInAction, computed } from 'mobx';
import { fetchAll } from '../actions/user';

class UserStore {
    @observable status = '';
    @observable.shallow results = [];

    @observable totalCount = 0;

    @action.bound
    async fetchUsers() {
        try {
            this.status = 'pending';
            const data = await fetchAll();
            
            runInAction(() => {
                this.totalCount = data.info.results;
                this.results = data.results;
                this.status = 'completed';
            });
        } catch (e) {
            runInAction(() => (this.status = 'failed'));
            console.log(e);
        }
    }

    @computed
    get isEmpty() {
        return this.results.length === 0;
    }
}

export const userStore = new UserStore();