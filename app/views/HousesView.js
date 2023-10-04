export const HousesView =
    `<div class="div-container-fluid">
    <section class="row">
      <div class="col-12 text-center">
        <h1>List House For Sale</h1>
      </div>
    </section>
    <section class="row justify-content-center d-flex">
      <div class="col-3  text-center">
        <form onsubmit="app.HousesController.createHouse(event)">

          <div>
            <label for="price">price</label>
            <input type="number" name="price" id="price" max="5000000" required>
          </div>

          <div>
            <label for="sqft">square feet</label>
            <input type="text" name="sqft" id="sqft" required>
          </div>

          <div>
            <label for="year">What year was it built?</label>
            <input type="text" name="year" id="year" required>
          </div>

          <div>
            <label for="bedrooms">number of bedrooms?</label>
            <input type="text" name="bedrooms" id="bedrooms" required>
          </div>

          <div>
            <label for="bathrooms">number of bathrooms?</label>
            <input type="text" name="bathrooms" id="bathrooms" required>
          </div>

          <div>
            <label for="imgUrl">Image of House</label>
            <input type="url" name="imgUrl" id="imgUrl" required>
          </div>

          <div>
            <label for="hasInfestation">Is there a bug infestation</label>
            <input type="checkbox" name="hasInfestation" id="hasInfestation">
          </div>

          <div>
            <label for="description">Description of the property</label>
            <input type="text" name="description" id="description" maxlength="500" required>
          </div>

          <button type="submit" class="btn btn-success">Submit</button>

        </form>
      </div>
    </section>

    <section class=" row">
      <div class="col-12 text-center">
        <h2 class="fs-1">Houses</h2>
      </div>
    </section>


    <section id="putHousesHere" class="row justify-content-evenly">

      <!-- template -->
      <!-- <div class="col-4 justify-content-center d-flex pt-4">
        <div class="bg-white house-card-width">
          <div class="d-flex justify-content-center">
            <img class="img-stuff pt-3 "
              src="
            https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="">
          </div>
          <div class="text-center">
            <p>$500,000</p>
            <p>1970 3 bedroom 2 bathroom 1400 sqft</p>
          </div>
          <div class="justify-content-center">
            <p class="text-left px-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
              consequatur,
              earum
              adipisci blanditiis unde saepe aliquid voluptate similique officiis laborum.</p>
          </div>
        </div>
      </div> -->






    </section>
  </div>`
