import { useMemo } from "react";
import "./Depth5Frame1.css";

const Depth5Frame1 = ({
  vector0,
  supportLocalBusinesses,
  orderFromYourFavoriteSpot,
  propHeight,
  propPadding,
  propFlex,
  propWidth,
  propDisplay,
  propAlignSelf,
  propFlex1,
  propPadding1,
  propWidth1,
}) => {
  const depth5Frame01Style = useMemo(() => {
    return {
      height: propHeight,
      padding: propPadding,
    };
  }, [propHeight, propPadding]);

  const depth6Frame1Style = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const supportLocalBusinessesStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propDisplay, propAlignSelf]);

  const depth7Frame1Style = useMemo(() => {
    return {
      flex: propFlex1,
      padding: propPadding1,
    };
  }, [propFlex1, propPadding1]);

  const orderFromYourStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="depth-5-frame-010" style={depth5Frame01Style}>
      <div className="depth-6-frame-013">
        <div className="depth-7-frame-06">
          <img className="benefit-icons" loading="lazy" alt="" src={vector0} />
          <div className="depth-8-frame-01" />
        </div>
      </div>
      <div className="depth-6-frame-1" style={depth6Frame1Style}>
        <div className="depth-7-frame-07">
          <div className="depth-8-frame-02">
            <b
              className="support-local-businesses"
              style={supportLocalBusinessesStyle}
            >
              {supportLocalBusinesses}
            </b>
          </div>
        </div>
        <div className="depth-7-frame-11" style={depth7Frame1Style}>
          <div className="depth-8-frame-03">
            <div className="order-from-your" style={orderFromYourStyle}>
              {orderFromYourFavoriteSpot}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depth5Frame1;
