import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component15.css";

const Component15 = () => {
  const navigate = useNavigate();

  const onP075001RClick = useCallback(() => {
    navigate("/13");
  }, [navigate]);

  return (
    <div className="div294">
      <div className="div295">
        <div className="div296" />
        <img className="p025400-r00-icon3" alt="" src="/p025400r00.svg" />
        <img className="p075007-r00-icon6" alt="" src="/p075007r00.svg" />
        <img className="p021500-r00-icon" alt="" src="/p021500r00.svg" />
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
        <img className="p021531-r00-icon3" alt="" src="/p021531r001.svg" />
        <div className="p021510-r001">
          <div className="div297" />
          <div className="div298" />
          <img className="icon178" alt="" src="/-1317.svg" />
        </div>
        <img className="icon179" alt="" src="/-1949.svg" />
        <div className="p021600-r002">
          <div className="div299" />
          <img className="icon180" alt="" src="/-1331.svg" />
        </div>
        <div className="p071013-r004">
          <div className="div296" />
          <img className="icon181" alt="" src="/-534.svg" />
        </div>
        <img className="p071012-r00-icon2" alt="" src="/p071012r00.svg" />
        <div className="p071099-r0018">
          <div className="div296" />
        </div>
        <div className="p071001-r002">
          <div className="div296" />
          <img className="icon182" alt="" src="/1.svg" />
        </div>
        <div className="p071000-r006">
          <div className="div296" />
          <img className="icon183" alt="" src="/0.svg" />
        </div>
        <div className="p071000-r007">
          <div className="div296" />
          <img className="icon183" alt="" src="/0.svg" />
        </div>
        <div className="p071211-r002">
          <div className="div296" />
          <img className="icon185" alt="" src="/-5352.svg" />
        </div>
        <div className="p071099-r0019">
          <div className="div296" />
        </div>
        <div className="p071099-r0020">
          <div className="div296" />
        </div>
        <div className="p071205-r002">
          <div className="div296" />
          <img className="icon186" alt="" src="/53.svg" />
        </div>
        <div className="p000001-r003">
          <div className="div296" />
          <div className="div310" />
          <img className="icon187" alt="" src="/-1288.svg" />
        </div>
        <div className="div311">18:00</div>
        <button className="p075001-r004" onClick={onP075001RClick}>
          <div className="div296" />
          <div className="div313" />
          <img className="icon188" alt="" src="/-1871.svg" />
        </button>
      </div>
    </div>
  );
};

export default Component15;
