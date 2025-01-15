import { useCallback } from "react";
import P000008R from "../components/P000008R";
import { useNavigate } from "react-router-dom";
import "./Component1.css";

const Component1 = () => {
  const navigate = useNavigate();

  const onP075001RClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  return (
    <div className="div">
      <div className="div1">
        <div className="div2" />
        <img className="p075007-r00-icon" alt="" src="/p075007r00.svg" />
        <img className="p021503-r00-icon" alt="" src="/p021503r00.svg" />
        <P000008R prop="/-1292.svg" prop1="/-129.svg" />
        <img className="p021520-r00-icon" alt="" src="/p021520r00.svg" />
        <img className="p021531-r00-icon" alt="" src="/p021531r00.svg" />
        <div className="p021512-r00">
          <div className="div3" />
          <div className="div4" />
          <img className="icon" alt="" src="/-1319.svg" />
        </div>
        <div className="p021602-r00">
          <div className="div5" />
          <img className="icon1" alt="" src="/-1333.svg" />
        </div>
        <div className="p071013-r00">
          <div className="div2" />
          <img className="icon2" alt="" src="/-534.svg" />
        </div>
        <img className="p071012-r00-icon" alt="" src="/p071012r00.svg" />
        <div className="p071099-r00">
          <div className="div2" />
        </div>
        <div className="p071001-r00">
          <div className="div2" />
          <img className="icon3" alt="" src="/1.svg" />
        </div>
        <div className="p071000-r00">
          <div className="div2" />
          <img className="icon4" alt="" src="/0.svg" />
        </div>
        <div className="p071000-r001">
          <div className="div2" />
          <img className="icon4" alt="" src="/0.svg" />
        </div>
        <div className="p071111-r00">
          <div className="div2" />
          <img className="icon6" alt="" src="/-535.svg" />
        </div>
        <div className="p071101-r00">
          <div className="div2" />
          <img className="icon3" alt="" src="/11.svg" />
        </div>
        <div className="p071101-r001">
          <div className="div2" />
          <img className="icon3" alt="" src="/11.svg" />
        </div>
        <div className="p071105-r00">
          <div className="div2" />
          <img className="icon9" alt="" src="/5.svg" />
        </div>
        <div className="div15">14:11</div>
        <div className="div16">ゴハン</div>
        <button className="p075001-r00" onClick={onP075001RClick}>
          <div className="div2" />
          <div className="div18" />
          <img className="icon10" alt="" src="/-1871.svg" />
        </button>
        <img className="p075011-r00-icon" alt="" src="/p075011r00.svg" />
        <img className="icon11" alt="" src="/-1978.svg" />
      </div>
    </div>
  );
};

export default Component1;
