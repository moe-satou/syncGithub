import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component14.css";

const Component14 = () => {
  const navigate = useNavigate();

  const onP000005RClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onP075001RClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className="div272">
      <img className="icon167" alt="" src="/-1812.svg" />
      <div className="div273">
        <div className="div274" />
        <img className="p075007-r00-icon5" alt="" src="/p075007r00.svg" />
        <img className="p021503-r00-icon2" alt="" src="/p021503r00.svg" />
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
        <img className="p021520-r00-icon2" alt="" src="/p021520r001.svg" />
        <img className="p021531-r00-icon2" alt="" src="/p021531r00.svg" />
        <div className="p021511-r00">
          <div className="div275" />
          <div className="div276" />
          <img className="icon168" alt="" src="/-1318.svg" />
        </div>
        <div className="p021601-r00">
          <div className="div277" />
          <img className="icon169" alt="" src="/-1332.svg" />
        </div>
        <div className="p071013-r003">
          <div className="div274" />
          <img className="icon170" alt="" src="/-534.svg" />
        </div>
        <div className="p071099-r0013">
          <div className="div274" />
        </div>
        <div className="p071099-r0014">
          <div className="div274" />
        </div>
        <div className="p071099-r0015">
          <div className="div274" />
        </div>
        <div className="p071003-r00">
          <div className="div274" />
          <img className="icon171" alt="" src="/31.svg" />
        </div>
        <div className="p071000-r005">
          <div className="div274" />
          <img className="icon172" alt="" src="/0.svg" />
        </div>
        <div className="p071211-r001">
          <div className="div274" />
          <img className="icon173" alt="" src="/-5352.svg" />
        </div>
        <div className="p071099-r0016">
          <div className="div274" />
        </div>
        <div className="p071099-r0017">
          <div className="div274" />
        </div>
        <div className="p071205-r001">
          <div className="div274" />
          <img className="icon174" alt="" src="/53.svg" />
        </div>
        <button className="p000005-r003" onClick={onP000005RClick}>
          <div className="div274" />
          <div className="div289" />
          <img className="icon175" alt="" src="/6.svg" />
        </button>
        <div className="div290">13:00</div>
        <div className="div291">ゴハン</div>
        <button className="p075001-r003" onClick={onP075001RClick}>
          <div className="div274" />
          <div className="div293" />
          <img className="icon176" alt="" src="/-1871.svg" />
        </button>
        <img className="p025400-r00-icon2" alt="" src="/p025400r00.svg" />
        <img className="icon177" alt="" src="/-1983.svg" />
      </div>
    </div>
  );
};

export default Component14;
