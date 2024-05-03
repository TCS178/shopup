import { useMemo } from "react";
import "./Depth5Frame.css";

const Depth5Frame = ({
  depth7Frame0,
  whenYouSpend15OrMoreOnYou,
  propHeight,
  propPadding,
}) => {
  const depth5Frame02Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  return (
    <div className="depth-5-frame-011" style={depth5Frame02Style}>
      <div className="depth-6-frame-014">
        <img
          className="depth-7-frame-08"
          loading="lazy"
          alt=""
          src={depth7Frame0}
        />
      </div>
      <div className="depth-6-frame-11">
        <div className="depth-7-frame-09">
          <div className="delivery-fee">$0 delivery fee</div>
        </div>
        <div className="depth-7-frame-12">
          <div className="when-you-spend">{whenYouSpend15OrMoreOnYou}</div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame;
