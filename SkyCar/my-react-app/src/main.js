function Main(){
    return(
        <>
        <section class="hero">
      <div class="container1">
        <h1>Your pick of rides at low prices</h1>
        <p>Save money by sharing rides with travelers going your way</p>

        <form class="search-form">
          <div class="form-row">
            <div class="form-group">
              <input type="text" placeholder="Leaving from" />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Going to" />
            </div>
            <div class="form-group">
              <input type="date" />
            </div>
            <div class="form-group">
              <input type="number" placeholder="Passanger" />
            </div>
            <div class="search-btn">
              <button class="btn btn-primary">
                <i class="fas fa-search"></i> Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="features-container">
          <div class="feature">
            <div class="feature-number"><i class="fa-solid fa-layer-group"></i></div>
            <h3 class="feature-title">Your pick of rides at low prices</h3>
            <p class="feature-description">
              No matter where you're going, by bus or carpool, find the perfect
              ride from our wide range of destinations and routes at low prices.
            </p>
          </div>

          <div class="feature">
            <div class="feature-number"><i class="fa-solid fa-id-card"></i></div>
            <h3 class="feature-title">Trust who you travel with</h3>
            <p class="feature-description">
              We take the time to get to know each of our members and bus
              partners. We check reviews, profiles and IDs, so you know who
              you're travelling with.
            </p>
          </div>

          <div class="feature">
            <div class="feature-number"><i class="fa-solid fa-cloud-bolt"></i></div>
            <h3 class="feature-title">Scroll, click, tap and go!</h3>
            <p class="feature-description">
              Booking a ride has never been easier! Thanks to our simple app
              powered by great technology, you can book a ride close to you in
              just minutes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="how-it-works">
        <h2 class="section-title">How it works</h2>
      <div class="container">
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3 class="step-title">Search for your perfect ride</h3>
            <p class="step-description">
              Enter your route and date to find rides going your way. Filter by
              price, departure time, and amenities.
            </p>
          </div>

          <div class="step">
            <div class="step-number">2</div>
            <h3 class="step-title">Book a seat</h3>
            <p class="step-description">
              Reserve your seat online with our secure payment system. Get
              instant confirmation and e-ticket.
            </p>
          </div>

          <div class="step">
            <div class="step-number">3</div>
            <h3 class="step-title">Hop in & go</h3>
            <p class="step-description">
              Meet your driver at the designated spot. Enjoy the journey and
              save money while traveling.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
    )
}
export default Main;