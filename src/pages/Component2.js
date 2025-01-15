import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component2.css";

const Component2 = () => {
  const navigate = useNavigate();

  const onP000013RClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  const onP000010RClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onP000014RClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <div className="div19">
      <div className="div20" />
      <div className="p023001-r00">
        <div className="div21" />
        <div className="div22" />
        <div className="div23" />
        <div className="div24" />
      </div>
      <button className="p000013-r00" onClick={onP000013RClick}>
        <div className="div21" />
        <div className="div26" />
        <img className="icon12" alt="" src="/.svg" />
      </button>
      <button className="p000010-r00" onClick={onP000010RClick}>
        <div className="div21" />
        <div className="div28" />
        <img className="icon13" alt="" src="/2.svg" />
      </button>
      <button className="p000014-r00" onClick={onP000014RClick}>
        <div className="div21" />
        <div className="div26" />
        <img className="icon12" alt="" src="/3.svg" />
      </button>
      <img className="p023000-r00-icon" alt="" src="/p023000r00.svg" />
      <div className="p053030-r00">
        <div className="div21" />
        <div className="div26" />
        <img className="icon15" alt="" src="/-1561.svg" />
      </div>
      <div className="p053030-r001">
        <div className="div21" />
        <div className="div26" />
        <img className="icon15" alt="" src="/-1561.svg" />
      </div>
      <div className="p053030-r002">
        <div className="div21" />
        <div className="div26" />
        <img className="icon15" alt="" src="/-1561.svg" />
      </div>
      <div className="div37">4/5</div>
      <div className="off">
        <p className="p">日付/時刻設定</p>
        <p className="p">識別番号</p>
        <p className="p">データを保存して電源OFF</p>
        <p className="p">タッチ位置ずれ補正</p>
      </div>
      <div className="div38" />
      <div className="div39" />
      <div className="div40">12:00</div>
      <div className="p070201-r00">
        <div className="div21" />
        <img className="icon18" alt="" src="/12.svg" />
      </div>
    </div>
  );
};

export default Component2;
