import { observable, action } from "mobx";

class MainStore {
    @observable showProperty = false

    @observable cities = []

    @observable clickedCity = null

    @observable clickedProperty = null

    @observable searchedDistrict = undefined

    @observable searchedCity = undefined

    @observable searchResults = []

    @observable searchResultCount = undefined

    @observable currentCurrency = "TRY"

    
}

const store = new MainStore()

export default store;