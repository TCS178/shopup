import { useMemo } from "react";
import "./Depth4Frame1.css";

const Depth4Frame1 = ({
  phoneNumber,
  depth9Frame0Placeholder,
  propPadding,
  propWidth,
}) => {
  const depth8Frame0Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const depth9Frame0Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="depth-4-frame-1">
      <div className="depth-5-frame-05">
        <div className="depth-6-frame-01">
          <div className="depth-7-frame-01">
            <div className="phone-number">{phoneNumber}</div>
          </div>
          <div className="depth-7-frame-1">
            <div className="depth-8-frame-0" style={depth8Frame0Style}>
              <input
                className="depth-9-frame-0"
                placeholder={depth9Frame0Placeholder}
                type="text"
                style={depth9Frame0Style}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth4Frame1;
