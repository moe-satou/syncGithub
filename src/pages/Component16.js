import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component16.css";

const Component16 = () => {
  const navigate = useNavigate();

  const onP000002RClick = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  const onP000001RClick = useCallback(() => {
    navigate("/15");
  }, [navigate]);

  const onP021014RClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  const onP021013RClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className="div314">
      <div className="div315">
        <img className="icon189" alt="" src="/-1864.svg" />
        <img className="p025400-r00-icon4" alt="" src="/p025400r00.svg" />
        <div className="p021100-r004">
          <div className="div316" />
        </div>
        <img className="p075007-r00-icon7" alt="" src="/p075007r00.svg" />
        <img className="icon190" alt="" src="/-1949.svg" />
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
        <button className="p000002-r001" onClick={onP000002RClick}>
          <div className="div317" />
          <div className="div318" />
          <img className="icon191" alt="" src="/-1290.svg" />
        </button>
        <button className="p000001-r004" onClick={onP000001RClick}>
          <div className="div317" />
          <div className="div320" />
          <img className="icon192" alt="" src="/-1288.svg" />
        </button>
        <div className="p071011-r002">
          <div className="div317" />
          <img className="icon193" alt="" src="/-5351.svg" />
        </div>
        <div className="p071099-r0021">
          <div className="div317" />
        </div>
        <div className="p071099-r0022">
          <div className="div317" />
        </div>
        <div className="p071005-r002">
          <div className="div317" />
          <img className="icon194" alt="" src="/52.svg" />
        </div>
        <button className="p021014-r003" onClick={onP021014RClick}>
          <img className="icon189" alt="" src="/-104.svg" />
          <img className="icon196" alt="" src="/-518.svg" />
          <img className="icon197" alt="" src="/-1238.svg" />
          <img className="icon198" alt="" src="/-56.svg" />
        </button>
        <button className="p021013-r003" onClick={onP021013RClick}>
          <img className="icon189" alt="" src="/-104.svg" />
          <img className="icon196" alt="" src="/-520.svg" />
          <img className="icon201" alt="" src="/-1242.svg" />
          <img className="icon202" alt="" src="/-1031.svg" />
        </button>
        <img className="p021012-r00-icon5" alt="" src="/p021012r001.svg" />
        <img className="p021011-r00-icon5" alt="" src="/p021011r00.svg" />
        <img className="p021000-r00-icon1" alt="" src="/p021000r00.svg" />
        <div className="p021020-r005">
          <div className="p0210205" />
        </div>
        <div className="div325">12:00</div>
        <img className="icon203" alt="" src="/-437--2.svg" />
      </div>
    </div>
  );
};

export default Component16;
