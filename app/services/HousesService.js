import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { saveState } from "../utils/Store.js";

function _saveHouses() {
    saveState('Houses', AppState.Houses)
}


class HousesService {

    buyHouse(houseId) {
        console.log('made it to service', houseId);
    }

    createHouse(newHouse) {

        const houseData = new House(newHouse)
        console.log('house data', houseData);
        AppState.Houses.push(houseData)
        console.log('house array', AppState.Houses)
        _saveHouses()
        AppState.emit('Houses')

    }




}

export const housesService = new HousesService()