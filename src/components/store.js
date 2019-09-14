import { observable, action } from "mobx";

class MainStore {
    @observable showProperty = false

    @observable cities = []

    @observable clickedCity= null

    
}

const store = new MainStore()

export default store;