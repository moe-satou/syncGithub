import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component10.css";

const Component10 = () => {
  const navigate = useNavigate();

  const onP075001RClick = useCallback(() => {
    navigate("/10");
  }, [navigate]);

  return (
    <div className="div185">
      <div className="div186">
        <div className="div187" />
        <img className="p075009-r00-icon1" alt="" src="/p075009r00.svg" />
        <img className="p075007-r00-icon2" alt="" src="/p075007r00.svg" />
        <img className="p021504-r00-icon" alt="" src="/p021504r00.svg" />
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
        <div className="p021514-r00">
          <div className="div188" />
          <div className="div189" />
          <img className="icon105" alt="" src="/-1321.svg" />
        </div>
        <img className="icon106" alt="" src="/-1943.svg" />
        <div className="p021600-r00">
          <div className="div190" />
          <img className="icon107" alt="" src="/-1331.svg" />
        </div>
        <div className="p071013-r001">
          <div className="div187" />
          <img className="icon108" alt="" src="/-534.svg" />
        </div>
        <img className="p071012-r00-icon1" alt="" src="/p071012r00.svg" />
        <div className="p071099-r003">
          <div className="div187" />
        </div>
        <div className="p071001-r001">
          <div className="div187" />
          <img className="icon109" alt="" src="/1.svg" />
        </div>
        <div className="p071000-r002">
          <div className="div187" />
          <img className="icon110" alt="" src="/0.svg" />
        </div>
        <div className="p071000-r003">
          <div className="div187" />
          <img className="icon110" alt="" src="/0.svg" />
        </div>
        <div className="p071111-r001">
          <div className="div187" />
          <img className="icon112" alt="" src="/-535.svg" />
        </div>
        <div className="p071099-r004">
          <div className="div187" />
        </div>
        <div className="p071107-r00">
          <div className="div187" />
          <img className="icon113" alt="" src="/72.svg" />
        </div>
        <div className="p071100-r00">
          <div className="div187" />
          <img className="icon110" alt="" src="/02.svg" />
        </div>
        <div className="div200">13:00</div>
        <button className="p075001-r001" onClick={onP075001RClick}>
          <div className="div187" />
          <div className="div202" />
          <img className="icon115" alt="" src="/-1871.svg" />
        </button>
      </div>
    </div>
  );
};

export default Component10;
