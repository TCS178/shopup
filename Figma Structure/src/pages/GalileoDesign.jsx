import Depth3Frame from "../components/Depth3Frame";
import Depth4Frame from "../components/Depth4Frame2";
import Depth4Frame from "../components/Depth4Frame";
import "./GalileoDesign.css";

const GalileoDesign = () => {
  return (
    <div className="galileo-design">
      <main className="depth-0-frame-0">
        <section className="depth-1-frame-0">
          <form className="depth-2-frame-0">
            <Depth3Frame />
            <div className="depth-3-frame-1">
              <div className="depth-4-frame-0">
                <div className="depth-5-frame-0">
                  <h3 className="log-in-as">Log in as a business</h3>
                </div>
              </div>
              <Depth4Frame
                businessName="Business name"
                depth9Frame0Placeholder="Pete's Pizza"
                propPadding="var(--padding-smi) var(--padding-325xl) var(--padding-mini) var(--padding-mini)"
                propWidth="88.5px"
              />
              <Depth4Frame
                businessName="Business phone number"
                depth9Frame0Placeholder="123-456-7890"
                propPadding="var(--padding-smi) var(--padding-311xl) var(--padding-mini) var(--padding-mini)"
                propWidth="103.3px"
              />
              <Depth4Frame
                propBackgroundColor="#f5ede8"
                propBackgroundColor1="#f5ede8"
              />
            </div>
          </form>
          <footer className="depth-2-frame-1">
            <div className="depth-3-frame-0">
              <div className="depth-4-frame-01">
                <div className="depth-5-frame-01">
                  <div className="or">or</div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
};

export default GalileoDesign;
