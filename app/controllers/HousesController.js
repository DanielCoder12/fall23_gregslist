import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
    let content = ''
    AppState.Houses.forEach(house => content += house.houseTemplate)
    // console.log('template', content);
    setHTML('putHousesHere', content)
}

export class HousesController {
    constructor() {
        console.log('houses controller cool emoji', AppState.Houses);
        AppState.on('Houses', _drawHouses)
        _drawHouses()
    }



    buyHouse(houseId) {
        housesService.buyHouse(houseId)
    }

    createHouse(event) {
        try {
            event.preventDefault()

            const formData = event.target
            // console.log('form data', formData)
            const form = getFormData(formData)
            form.hasInfestation = form.hasInfestation == 'on'
            // console.log('did this work', form.hasInfestation);

            console.log('event', form)


            housesService.createHouse(form)
            form.reset()
        }
        catch (error) {
            console.error('error')
        }
    }

}

