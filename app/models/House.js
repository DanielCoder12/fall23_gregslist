import { generateId } from "../utils/GenerateId.js"

export class House {
    constructor(data) {
        this.id = generateId()
        this.year = data.year
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.sqft = data.sqft
        this.price = data.price
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.hasInfestation = data.hasInfestation
    }

    get houseTemplate() {

        return `
        <div class="col-4 justify-content-center d-flex pt-4">
        <div class="bg-white shadow house-card-width">
          <div class="d-flex justify-content-center">
            <img class="img-stuff pt-3 "
              src="
            ${this.imgUrl}"
              alt="">
          </div>
          <div class="text-center">
            <p>${this.bugInfestation} $${this.price}</p>
            <p>${this.year} ${this.bedrooms} bedrooms, ${this.bathrooms} bathrooms ${this.sqft} sqft</p>
          </div>
          <div class="">
            <p class="text-left px-5">${this.description}</p>
            <div class="text-end p-3" >
            <button onclick="app.HousesController.buyHouse('${this.id}')" class=" btn btn-danger">Buy House</button>
            </div>
          </div>
        </div>
      </div> 
    `
    }

    get bugInfestation() {
        if (!this.hasInfestation) {
            return `<i class="mdi mdi-shimmer"></i>`
        }
        {/* <i class="mdi mdi-shimmer"></i> */ }
        return `<i class="mdi mdi-bug"></i>`
    }
}