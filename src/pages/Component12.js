import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component12.css";

const Component12 = () => {
  const navigate = useNavigate();

  const onP000005RClick = useCallback(() => {
    navigate("/8");
  }, [navigate]);

  const onP000004RClick = useCallback(() => {
    navigate("/9");
  }, [navigate]);

  const onP075001RClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className="div231">
      <div className="div232">
        <div className="div233" />
        <img className="p025401-r00-icon" alt="" src="/p025401r00.svg" />
        <img className="p075007-r00-icon3" alt="" src="/p075007r00.svg" />
        <img className="p021503-r00-icon1" alt="" src="/p021503r00.svg" />
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
        <img className="p021520-r00-icon1" alt="" src="/p021520r001.svg" />
        <img className="p021531-r00-icon1" alt="" src="/p021531r00.svg" />
        <div className="p021510-r00">
          <div className="div234" />
          <div className="div235" />
          <img className="icon141" alt="" src="/-1317.svg" />
        </div>
        <div className="p021600-r001">
          <div className="div236" />
          <img className="icon142" alt="" src="/-1331.svg" />
        </div>
        <div className="p071013-r002">
          <div className="div233" />
          <img className="icon143" alt="" src="/-534.svg" />
        </div>
        <div className="p071099-r005">
          <div className="div233" />
        </div>
        <div className="p071099-r006">
          <div className="div233" />
        </div>
        <div className="p071099-r007">
          <div className="div233" />
        </div>
        <div className="p071099-r008">
          <div className="div233" />
        </div>
        <div className="p071000-r004">
          <div className="div233" />
          <img className="icon144" alt="" src="/0.svg" />
        </div>
        <div className="p071211-r00">
          <div className="div233" />
          <img className="icon145" alt="" src="/-5352.svg" />
        </div>
        <div className="p071099-r009">
          <div className="div233" />
        </div>
        <div className="p071099-r0010">
          <div className="div233" />
        </div>
        <div className="p071205-r00">
          <div className="div233" />
          <img className="icon146" alt="" src="/53.svg" />
        </div>
        <button className="p000005-r001" onClick={onP000005RClick}>
          <div className="div233" />
          <div className="div248" />
          <img className="icon147" alt="" src="/6.svg" />
        </button>
        <div className="div249">12:00</div>
        <div className="div250">ゴハン</div>
        <img className="icon148" alt="" src="/-1959.svg" />
        <button className="p000004-r001" onClick={onP000004RClick}>
          <div className="div233" />
          <div className="div252" />
          <img className="icon149" alt="" src="/8.svg" />
        </button>
        <button className="p075001-r002" onClick={onP075001RClick}>
          <div className="div233" />
          <div className="div254" />
          <img className="icon150" alt="" src="/-1871.svg" />
        </button>
      </div>
      <img className="icon151" alt="" src="/-1863.svg" />
    </div>
  );
};

export default Component12;
