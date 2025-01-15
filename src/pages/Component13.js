import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component13.css";

const Component13 = () => {
  const navigate = useNavigate();

  const onP000003RClick = useCallback(() => {
    navigate("/7");
  }, [navigate]);

  const onP000005RClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onP021014RClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  const onP021010RClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  const onP000004RClick = useCallback(() => {
    navigate("/9");
  }, [navigate]);

  return (
    <div className="div255">
      <div className="div256">
        <div className="div257">（チルド時間）</div>
      </div>
      <div className="div258">
        <img className="icon152" alt="" src="/-1864.svg" />
        <img className="p025401-r00-icon1" alt="" src="/p025401r00.svg" />
        <div className="p021100-r003">
          <div className="div259" />
        </div>
        <img className="p075007-r00-icon4" alt="" src="/p075007r00.svg" />
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
        <button className="p000003-r001" onClick={onP000003RClick}>
          <div className="div260" />
          <div className="div261" />
          <img className="icon153" alt="" src="/-1290.svg" />
        </button>
        <button className="p000005-r002" onClick={onP000005RClick}>
          <div className="div260" />
          <div className="div263" />
          <img className="icon154" alt="" src="/6.svg" />
        </button>
        <div className="p071011-r001">
          <div className="div260" />
          <img className="icon155" alt="" src="/-5351.svg" />
        </div>
        <div className="p071099-r0011">
          <div className="div260" />
        </div>
        <div className="p071099-r0012">
          <div className="div260" />
        </div>
        <div className="p071005-r001">
          <div className="div260" />
          <img className="icon156" alt="" src="/52.svg" />
        </div>
        <button className="p021014-r002" onClick={onP021014RClick}>
          <img className="icon152" alt="" src="/-104.svg" />
          <img className="icon158" alt="" src="/-518.svg" />
          <img className="icon159" alt="" src="/-1238.svg" />
          <img className="icon160" alt="" src="/-56.svg" />
        </button>
        <img className="p021003-r00-icon1" alt="" src="/p021003r00.svg" />
        <img className="p021012-r00-icon4" alt="" src="/p021012r00.svg" />
        <img className="p021011-r00-icon4" alt="" src="/p021011r00.svg" />
        <button className="p021010-r003" onClick={onP021010RClick}>
          <img className="icon152" alt="" src="/-104.svg" />
          <img className="icon158" alt="" src="/-523.svg" />
          <img className="icon163" alt="" src="/-1239.svg" />
          <img className="icon164" alt="" src="/-1090.svg" />
        </button>
        <div className="p021020-r004">
          <div className="p0210204" />
        </div>
        <img className="p021101-r00-icon2" alt="" src="/p021101r00.svg" />
        <div className="div268">12:00</div>
        <div className="div269">ゴハン</div>
        <img className="icon165" alt="" src="/-1959.svg" />
        <button className="p000004-r002" onClick={onP000004RClick}>
          <div className="div260" />
          <div className="div271" />
          <img className="icon166" alt="" src="/8.svg" />
        </button>
      </div>
    </div>
  );
};

export default Component13;
