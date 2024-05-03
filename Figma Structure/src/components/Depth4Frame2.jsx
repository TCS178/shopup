import { useMemo } from "react";
import "./Depth4Frame2.css";

const Depth4Frame = ({
  businessName,
  depth9Frame0Placeholder,
  propPadding,
  propWidth,
}) => {
  const depth8Frame01Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const depth9Frame01Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="depth-4-frame-15">
      <div className="depth-5-frame-021">
        <div className="depth-6-frame-034">
          <div className="depth-7-frame-036">
            <div className="business-name">{businessName}</div>
          </div>
          <div className="depth-7-frame-17">
            <div className="depth-8-frame-015" style={depth8Frame01Style}>
              <input
                className="depth-9-frame-08"
                placeholder={depth9Frame0Placeholder}
                type="text"
                style={depth9Frame01Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame;
