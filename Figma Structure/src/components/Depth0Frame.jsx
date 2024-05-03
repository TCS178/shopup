import Depth5Frame3 from "./Depth5Frame3";
import Depth5Frame2 from "./Depth5Frame2";
import "./Depth0Frame.css";

const Depth0Frame = () => {
  return (
    <main className="depth-0-frame-03">
      <div className="depth-3-frame-03">
        <div className="depth-4-frame-06">
          <div className="depth-5-frame-014">
            <div className="depth-6-frame-16">
              <input
                className="depth-7-frame-019"
                placeholder="Home"
                type="text"
              />
              <div className="depth-7-frame-15">
                <div className="depth-8-frame-08">
                  <div className="depth-9-frame-03">
                    <div className="list-your-business">List your business</div>
                  </div>
                </div>
              </div>
              <div className="depth-7-frame-2">
                <div className="depth-8-frame-09">
                  <div className="depth-9-frame-04">
                    <div className="events">Events</div>
                  </div>
                </div>
              </div>
              <div className="depth-7-frame-3">
                <div className="depth-8-frame-010">
                  <div className="depth-9-frame-05">
                    <div className="groups">Groups</div>
                  </div>
                </div>
              </div>
              <div className="depth-7-frame-4">
                <div className="depth-8-frame-011">
                  <div className="depth-9-frame-06">
                    <div className="services">Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="depth-5-frame-15">
            <div className="depth-6-frame-021">
              <button className="depth-7-frame-020">
                <div className="depth-8-frame-012">
                  <b className="log-in1">Log in</b>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="search-container-wrapper">
        <div className="search-container">
          <div className="search-and-icon">
            <div className="depth-5-frame-015">
              <div className="depth-6-frame-022">
                <div className="depth-7-frame-021">
                  <h1 className="find-what-you">Find what you need</h1>
                </div>
              </div>
              <div className="depth-6-frame-17">
                <div className="depth-7-frame-022">
                  <div className="search-for-restaurants">
                    Search for restaurants, hotels, museums and more
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="depth-4-frame-1-group">
            <div className="depth-4-frame-13">
              <div className="depth-5-frame-016">
                <div className="depth-6-frame-023">
                  <div className="depth-7-frame-023">
                    <img
                      className="empty-state-icon"
                      alt=""
                      src="/empty-state.svg"
                    />
                    <div className="depth-8-frame-013" />
                  </div>
                </div>
                <input
                  className="depth-6-frame-18"
                  placeholder="Search for businesses..."
                  type="text"
                />
              </div>
            </div>
            <div className="depth-4-frame-22">
              <button className="depth-5-frame-017">
                <div className="depth-6-frame-024">
                  <div className="depth-7-frame-024">
                    <div className="open-now">Open now</div>
                  </div>
                </div>
              </button>
              <button className="depth-5-frame-16">
                <div className="depth-6-frame-025">
                  <div className="depth-7-frame-025">
                    <div className="good-for-kids">Good for kids</div>
                  </div>
                </div>
              </button>
              <button className="depth-5-frame-21">
                <div className="depth-6-frame-026">
                  <div className="depth-7-frame-026">
                    <div className="offers-takeout">Offers takeout</div>
                  </div>
                </div>
              </button>
              <button className="depth-5-frame-32">
                <div className="depth-6-frame-027">
                  <div className="depth-7-frame-027">
                    <div className="outdoor-seating">Outdoor seating</div>
                  </div>
                </div>
              </button>
              <button className="depth-5-frame-41">
                <div className="depth-6-frame-028">
                  <div className="depth-7-frame-028">
                    <div className="accepts-credit-cards">
                      Accepts credit cards
                    </div>
                  </div>
                </div>
              </button>
              <div className="depth-5-frame-51">
                <div className="depth-6-frame-029">
                  <div className="depth-7-frame-029">
                    <div className="wheelchair-accessible">
                      Wheelchair accessible
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="depth-4-frame-32">
              <div className="listing-container">
                <div className="categories-and-icons">
                  <Depth5Frame3
                    depth7Frame0="/depth-7-frame-01@2x.png"
                    restaurant="Restaurant"
                  />
                  <Depth5Frame3
                    depth7Frame0="/depth-7-frame-0-11@2x.png"
                    restaurant="Bars"
                  />
                </div>
                <div className="depth-5-frame-17">
                  <button className="depth-6-frame-030">
                    <img
                      className="depth-7-frame-030"
                      alt=""
                      src="/depth-7-frame-0-21@2x.png"
                    />
                  </button>
                  <div className="depth-6-frame-19">
                    <div className="depth-7-frame-031">
                      <div className="grocery">Grocery</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="depth-5-frame-22">
                <button className="depth-6-frame-031">
                  <img
                    className="depth-7-frame-032"
                    alt=""
                    src="/depth-7-frame-0-3@2x.png"
                  />
                </button>
                <div className="depth-6-frame-110">
                  <div className="depth-7-frame-033">
                    <div className="delivery">Delivery</div>
                  </div>
                </div>
              </div>
              <Depth5Frame2
                depth7Frame0="/depth-7-frame-0-4@2x.png"
                takeout="Takeout"
              />
              <Depth5Frame2
                depth7Frame0="/depth-7-frame-0-5@2x.png"
                takeout="Cafe"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Depth0Frame;
