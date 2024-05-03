import Depth3Frame from "../components/Depth3Frame";
import Depth4Frame from "../components/Depth4Frame2";
import "./Depth0Frame1.css";

const Depth0Frame1 = () => {
  return (
    <div className="depth-0-frame-02">
      <main className="depth-1-frame-01">
        <form className="depth-2-frame-01">
          <Depth3Frame />
          <div className="depth-3-frame-11">
            <div className="depth-4-frame-02">
              <div className="depth-5-frame-02">
                <h3 className="log-in-as1">Log in as a business</h3>
              </div>
            </div>
            <Depth4Frame
              businessName="Business name"
              depth9Frame0Placeholder="Pete's Pizza"
            />
            <Depth4Frame
              businessName="Business phone number"
              depth9Frame0Placeholder="123-456-7890"
              propPadding="var(--padding-smi) var(--padding-311xl) var(--padding-mini) var(--padding-mini)"
              propWidth="103.3px"
            />
            <div className="depth-4-frame-3">
              <div className="depth-5-frame-03">
                <button className="depth-6-frame-0">
                  <div className="depth-7-frame-0">
                    <b className="continue">Continue</b>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
        <footer className="depth-2-frame-11">
          <div className="depth-3-frame-01">
            <div className="depth-4-frame-03">
              <div className="depth-5-frame-04">
                <div className="or1">or</div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Depth0Frame1;
