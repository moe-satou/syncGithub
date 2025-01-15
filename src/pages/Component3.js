import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component3.css";

const Component3 = () => {
  const navigate = useNavigate();

  const onP000013RClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  const onP000010RClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onP000014RClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  return (
    <div className="div42">
      <div className="div43" />
      <div className="p023001-r001">
        <div className="div44" />
        <div className="div45" />
        <div className="div46" />
        <div className="div47" />
      </div>
      <button className="p000013-r001" onClick={onP000013RClick}>
        <div className="div44" />
        <div className="div49" />
        <img className="icon19" alt="" src="/.svg" />
      </button>
      <button className="p000010-r001" onClick={onP000010RClick}>
        <div className="div44" />
        <div className="div51" />
        <img className="icon20" alt="" src="/2.svg" />
      </button>
      <button className="p000014-r001" onClick={onP000014RClick}>
        <div className="div44" />
        <div className="div49" />
        <img className="icon19" alt="" src="/3.svg" />
      </button>
      <img className="p023000-r00-icon1" alt="" src="/p023000r00.svg" />
      <div className="p053030-r003">
        <div className="div44" />
        <div className="div49" />
        <img className="icon22" alt="" src="/-1561.svg" />
      </div>
      <div className="div56">機器設定初期化</div>
      <div className="div57">5/5</div>
      <div className="div58">12:00</div>
      <img className="p023010-r00-icon" alt="" src="/p023010r00.svg" />
    </div>
  );
};

export default Component3;
