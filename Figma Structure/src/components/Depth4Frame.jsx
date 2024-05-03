import { useMemo } from "react";
import "./Depth4Frame.css";

const Depth4Frame = ({ propBackgroundColor, propBackgroundColor1 }) => {
  const depth5Frame0Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const depth6Frame0Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  return (
    <div className="depth-4-frame-2">
      <div className="depth-5-frame-06" style={depth5Frame0Style}>
        <button className="depth-6-frame-02" style={depth6Frame0Style}>
          <div className="depth-7-frame-02">
            <b className="continue1">Continue</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Depth4Frame;
