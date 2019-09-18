import { observable, action } from "mobx";

class MainStore {
    @observable showProperty = false

    @observable cities = []

    @observable clickedCity = null

    @observable propertyList = [
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 },
        {type : "LUXURY  VILLA" ,location:"Izmir/Çeşme" , shortDescription:"Luxury Villa in Çeşme with private beacgh" , cost: "1.200.000" , m2: "140 m^2 / 520 m^2" , bed_count: 4 }
    ]

    
}

const store = new MainStore()

export default store;