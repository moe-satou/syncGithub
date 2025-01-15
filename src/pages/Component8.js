import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component8.css";

const Component8 = () => {
  const navigate = useNavigate();

  const onP021010RClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onP021013RClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onP000001RClick = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  return (
    <div className="div168">
      <div className="div169" />
      <img className="p075014-r00-icon" alt="" src="/p075014r00.svg" />
      <P000008R
        p000008R00Left="0px"
        prop="/-1294.svg"
        iconTop="calc(50% - 12.7px)"
        iconLeft="unset"
        iconWidth="81.5px"
        iconRight="19.24px"
        prop1="/-131.svg"
        iconTop1="calc(50% - 17px)"
        iconLeft1="14px"
        iconHeight="35px"
        iconWidth1="32.5px"
      />
      <div className="p021020-r001">
        <div className="p0210201" />
      </div>
      <button className="p021010-r001" onClick={onP021010RClick}>
        <img className="icon80" alt="" src="/-104.svg" />
        <img className="icon81" alt="" src="/-523.svg" />
        <img className="icon82" alt="" src="/-1239.svg" />
        <img className="icon83" alt="" src="/-58.svg" />
      </button>
      <img className="icon84" alt="" src="/-437--2.svg" />
      <div className="div170">12:00</div>
      <P000008R
        p000008R00Left="160px"
        prop="/-1292.svg"
        iconTop="calc(50% - 14.04px)"
        iconLeft="calc(50% - 9.97px)"
        iconWidth="59.7px"
        iconRight="unset"
        prop1="/-133.svg"
        iconTop1="calc(50% - 16.4px)"
        iconLeft1="22px"
        iconHeight="35.3px"
        iconWidth1="33.5px"
      />
      <img className="p021004-r00-icon" alt="" src="/p021004r00.svg" />
      <button className="p021013-r00" onClick={onP021013RClick}>
        <img className="icon80" alt="" src="/-104.svg" />
        <img className="icon81" alt="" src="/-520.svg" />
        <img className="icon87" alt="" src="/-1242.svg" />
        <img className="icon88" alt="" src="/-103.svg" />
      </button>
      <img className="p021012-r00-icon1" alt="" src="/p021012r00.svg" />
      <img className="p021011-r00-icon1" alt="" src="/p021011r00.svg" />
      <button className="p000001-r00" onClick={onP000001RClick}>
        <div className="div171" />
        <div className="div172" />
        <img className="icon89" alt="" src="/-1288.svg" />
      </button>
      <div className="p070207-r001">
        <div className="div171" />
        <img className="icon90" alt="" src="/71.svg" />
      </div>
      <div className="p070200-r001">
        <div className="div171" />
        <img className="icon91" alt="" src="/01.svg" />
      </div>
      <div className="p070211-r003">
        <div className="div171" />
        <img className="icon92" alt="" src="/-588.svg" />
      </div>
    </div>
  );
};

export default Component8;
