import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./P000008R.css";

const P000008R = ({
  className = "",
  p000008R00Left,
  prop,
  iconTop,
  iconLeft,
  iconWidth,
  iconRight,
  prop1,
  iconTop1,
  iconLeft1,
  iconHeight,
  iconWidth1,
}) => {
  const p000008R00Style = useMemo(() => {
    return {
      left: p000008R00Left,
    };
  }, [p000008R00Left]);

  const iconStyle = useMemo(() => {
    return {
      top: iconTop,
      left: iconLeft,
      width: iconWidth,
      right: iconRight,
    };
  }, [iconTop, iconLeft, iconWidth, iconRight]);

  const icon1Style = useMemo(() => {
    return {
      top: iconTop1,
      left: iconLeft1,
      height: iconHeight,
      width: iconWidth1,
    };
  }, [iconTop1, iconLeft1, iconHeight, iconWidth1]);

  const navigate = useNavigate();

  const onP000008RClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <button
      className={`p000008-r00 ${className}`}
      onClick={onP000008RClick}
      style={p000008R00Style}
    >
      <div className="div345" />
      <div className="div346" />
      <img className="icon213" alt="" src={prop} style={iconStyle} />
      <img className="icon214" alt="" src={prop1} style={icon1Style} />
    </button>
  );
};

P000008R.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  p000008R00Left: PropTypes.string,
  iconTop: PropTypes.string,
  iconLeft: PropTypes.string,
  iconWidth: PropTypes.string,
  iconRight: PropTypes.string,
  iconTop1: PropTypes.string,
  iconLeft1: PropTypes.string,
  iconHeight: PropTypes.string,
  iconWidth1: PropTypes.string,
};

export default P000008R;
