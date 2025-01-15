import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component9.css";

const Component9 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  const onP000001RClick = useCallback(() => {
    navigate("/12");
  }, [navigate]);

  const onButtonClick1 = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className="div176">
      <img className="icon93" alt="" src="/-1864.svg" />
      <img className="p075009-r00-icon" alt="" src="/p075009r00.svg" />
      <div className="p021100-r001">
        <div className="div177" />
      </div>
      <img className="p075007-r00-icon1" alt="" src="/p075007r00.svg" />
      <P000008R
        p000008R00Left="0px"
        prop="/-1292.svg"
        iconTop="calc(50% - 14.04px)"
        iconLeft="calc(50% - 9.97px)"
        iconWidth="59.7px"
        iconRight="unset"
        prop1="/-129.svg"
        iconTop1="calc(50% - 11px)"
        iconLeft1="24px"
        iconHeight="24.5px"
        iconWidth1="30px"
      />
      <div className="p021010-r002">
        <img className="icon94" alt="" src="/-104.svg" />
        <button className="button" onClick={onButtonClick} />
        <img className="icon95" alt="" src="/-1239.svg" />
        <img className="icon96" alt="" src="/-58.svg" />
      </div>
      <div className="p021020-r002">
        <div className="p0210202" />
      </div>
      <div className="div178">12:00</div>
      <img className="icon97" alt="" src="/-437--2.svg" />
      <img className="icon98" alt="" src="/-1943.svg" />
      <button className="p000001-r001" onClick={onP000001RClick}>
        <div className="div179" />
        <div className="div180" />
        <img className="icon99" alt="" src="/-1288.svg" />
      </button>
      <div className="p071011-r00">
        <div className="div179" />
        <img className="icon100" alt="" src="/-5351.svg" />
      </div>
      <div className="p071099-r001">
        <div className="div179" />
      </div>
      <div className="p071099-r002">
        <div className="div179" />
      </div>
      <div className="p071005-r00">
        <div className="div179" />
        <img className="icon101" alt="" src="/52.svg" />
      </div>
      <img className="p021004-r00-icon1" alt="" src="/p021004r00.svg" />
      <div className="p021013-r001">
        <img className="icon94" alt="" src="/-104.svg" />
        <button className="button" onClick={onButtonClick1} />
        <img className="icon103" alt="" src="/-1242.svg" />
        <img className="icon104" alt="" src="/-1031.svg" />
      </div>
      <img className="p021012-r00-icon2" alt="" src="/p021012r001.svg" />
      <img className="p021011-r00-icon2" alt="" src="/p021011r001.svg" />
    </div>
  );
};

export default Component9;
