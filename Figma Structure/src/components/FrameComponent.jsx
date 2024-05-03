import Depth5Frame1 from "./Depth5Frame1";
import Depth5Frame from "./Depth5Frame";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="frame-parent">
      <div className="depth-6-frame-0-wrapper">
        <div className="depth-6-frame-015">
          <div className="depth-7-frame-010">
            <div className="depth-8-frame-04">
              <div className="depth-9-frame-01">
                <div className="depth-10-frame-0">
                  <div className="depth-11-frame-0">
                    <h1 className="welcome-to-local">Welcome to Local</h1>
                  </div>
                </div>
                <div className="depth-10-frame-1">
                  <div className="depth-11-frame-01">
                    <div className="support-your-local">
                      Support your local businesses and get $10 off your first
                      order. Use code 'LOCAL10' at checkout.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="depth-8-frame-1">
              <div className="depth-9-frame-02">
                <div className="depth-10-frame-01">
                  <div className="depth-11-frame-02">
                    <div className="depth-12-frame-0">
                      <img
                        className="search-icon"
                        loading="lazy"
                        alt=""
                        src="/vector--0-1.svg"
                      />
                      <div className="depth-13-frame-0" />
                    </div>
                  </div>
                  <div className="depth-11-frame-1">
                    <div className="depth-12-frame-01">
                      <div className="enter-delivery-address">
                        Enter delivery address
                      </div>
                    </div>
                  </div>
                </div>
                <button className="depth-10-frame-11">
                  <div className="depth-11-frame-03">
                    <div className="depth-12-frame-02">
                      <div className="depth-13-frame-01">
                        <b className="find-local-favorites">
                          Find local favorites
                        </b>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="depth-4-frame-1-parent">
        <div className="depth-4-frame-12">
          <div className="depth-5-frame-012">
            <div className="depth-6-frame-016">
              <h3 className="local-businesses-are">
                Local businesses are the heart of a community
              </h3>
            </div>
          </div>
        </div>
        <div className="depth-4-frame-21">
          <div className="benefits">
            <Depth5Frame1
              vector0="/vector--0-2.svg"
              supportLocalBusinesses="Support local businesses"
              orderFromYourFavoriteSpot="Order from your favorite spots and discover new ones"
            />
            <Depth5Frame1
              vector0="/vector--0-3.svg"
              supportLocalBusinesses="Earn 1 point for every $ you spend"
              orderFromYourFavoriteSpot="Redeem points for $5 off future orders"
              propHeight="unset"
              propPadding="var(--padding-sm) var(--padding-mid) var(--padding-base) var(--padding-mini)"
              propFlex="unset"
              propWidth="unset"
              propDisplay="unset"
              propAlignSelf="stretch"
              propFlex1="unset"
              propPadding1="0px 0px var(--padding-2xl)"
              propWidth1="174px"
            />
          </div>
          <div className="depth-5-frame-13">
            <div className="depth-6-frame-017">
              <div className="depth-7-frame-011">
                <img
                  className="action-icon"
                  loading="lazy"
                  alt=""
                  src="/vector--0-4.svg"
                />
                <div className="depth-8-frame-05" />
              </div>
            </div>
            <div className="depth-6-frame-12">
              <div className="depth-7-frame-012">
                <div className="depth-8-frame-06">
                  <b className="get-delivery-or">Get delivery or pickup</b>
                </div>
              </div>
              <div className="depth-7-frame-13">
                <div className="depth-8-frame-07">
                  <div className="your-choice-of">
                    Your choice of food, drinks, groceries, and more
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="depth-4-frame-31">
        <div className="delivery-details">
          <Depth5Frame
            depth7Frame0="/depth-7-frame-0@2x.png"
            whenYouSpend15OrMoreOnYou="When you spend $15 or more on your first order"
          />
          <Depth5Frame
            depth7Frame0="/depth-7-frame-0-1@2x.png"
            whenYouSpend15OrMoreOnYou="On orders over $12"
            propHeight="381px"
            propPadding="unset"
          />
        </div>
        <div className="depth-5-frame-14">
          <div className="depth-6-frame-018">
            <img
              className="depth-7-frame-013"
              loading="lazy"
              alt=""
              src="/depth-7-frame-0-2@2x.png"
            />
          </div>
          <div className="depth-6-frame-13">
            <div className="depth-7-frame-014">
              <div className="free-delivery-on">
                Free delivery on your first order
              </div>
            </div>
            <div className="depth-7-frame-14">
              <div className="use-code-local">Use code 'LOCAL' at checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
