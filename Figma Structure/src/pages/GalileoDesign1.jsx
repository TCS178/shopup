import Depth2Frame from "../components/Depth2Frame";
import FrameComponent from "../components/FrameComponent";
import "./GalileoDesign1.css";

const GalileoDesign = () => {
  return (
    <div className="galileo-design1">
      <main className="depth-0-frame-01">
        <Depth2Frame />
        <section className="depth-0-frame-0-inner">
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default GalileoDesign;
