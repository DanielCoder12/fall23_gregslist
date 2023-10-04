

// i want this to be a seperate page from the houses view but them to still update eachother

export const NewHouseView = `
<div class="div-container-fluid">
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
</div>
`