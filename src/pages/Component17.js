import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component17.css";

const Component17 = () => {
  const navigate = useNavigate();

  const onP075001RClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className="div326">
      <div className="div327">
        <div className="div328" />
        <img className="p025400-r00-icon5" alt="" src="/p025400r00.svg" />
        <img className="p075007-r00-icon8" alt="" src="/p075007r00.svg" />
        <img className="p021500-r00-icon1" alt="" src="/p021500r00.svg" />
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
        <img className="p021531-r00-icon4" alt="" src="/p021531r001.svg" />
        <div className="p021511-r001">
          <div className="div329" />
          <div className="div330" />
          <img className="icon204" alt="" src="/-1318.svg" />
        </div>
        <img className="icon205" alt="" src="/-1949.svg" />
        <div className="p021601-r001">
          <div className="div331" />
          <img className="icon206" alt="" src="/-1332.svg" />
        </div>
        <div className="p071013-r005">
          <div className="div328" />
          <img className="icon207" alt="" src="/-534.svg" />
        </div>
        <div className="p071099-r0023">
          <div className="div328" />
        </div>
        <div className="p071099-r0024">
          <div className="div328" />
        </div>
        <div className="p071099-r0025">
          <div className="div328" />
        </div>
        <div className="p071003-r001">
          <div className="div328" />
          <img className="icon208" alt="" src="/31.svg" />
        </div>
        <div className="p071000-r008">
          <div className="div328" />
          <img className="icon209" alt="" src="/0.svg" />
        </div>
        <div className="p071211-r003">
          <div className="div328" />
          <img className="icon210" alt="" src="/-5352.svg" />
        </div>
        <div className="p071099-r0026">
          <div className="div328" />
        </div>
        <div className="p071099-r0027">
          <div className="div328" />
        </div>
        <div className="p071205-r003">
          <div className="div328" />
          <img className="icon211" alt="" src="/53.svg" />
        </div>
        <div className="div342">05:20</div>
        <button className="p075001-r005" onClick={onP075001RClick}>
          <div className="div328" />
          <div className="div344" />
          <img className="icon212" alt="" src="/-1871.svg" />
        </button>
      </div>
    </div>
  );
};

export default Component17;
