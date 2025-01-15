import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component5.css";

const Component5 = () => {
  const navigate = useNavigate();

  const onP000013RClick = useCallback(() => {
    navigate("/21");
  }, [navigate]);

  const onP000010RClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onP000014RClick = useCallback(() => {
    navigate("/5");
  }, [navigate]);

  return (
    <div className="div78">
      <div className="div79" />
      <div className="div80">12:00</div>
      <div className="p023001-r003">
        <div className="div81" />
        <div className="div82" />
        <div className="div83" />
        <div className="div84" />
      </div>
      <button className="p000013-r003" onClick={onP000013RClick}>
        <div className="div81" />
        <div className="div86" />
        <img className="icon31" alt="" src="/.svg" />
      </button>
      <button className="p000010-r003" onClick={onP000010RClick}>
        <div className="div81" />
        <div className="div88" />
        <img className="icon32" alt="" src="/2.svg" />
      </button>
      <button className="p000014-r003" onClick={onP000014RClick}>
        <div className="div81" />
        <div className="div86" />
        <img className="icon31" alt="" src="/3.svg" />
      </button>
      <img className="p023000-r00-icon3" alt="" src="/p023000r00.svg" />
      <div className="p053010-r00">
        <div className="div81" />
        <div className="div86" />
        <img className="icon34" alt="" src="/-1553.svg" />
      </div>
      <div className="p053011-r00">
        <div className="div81" />
        <div className="div86" />
        <img className="icon35" alt="" src="/-1556.svg" />
      </div>
      <div className="p053012-r00">
        <div className="div81" />
        <div className="div86" />
        <img className="icon36" alt="" src="/-1557.svg" />
      </div>
      <div className="p053010-r001">
        <div className="div81" />
        <div className="div86" />
        <img className="icon34" alt="" src="/-1553.svg" />
      </div>
      <div className="p053013-r00">
        <div className="div81" />
        <div className="div86" />
        <img className="icon38" alt="" src="/-1559.svg" />
      </div>
      <div className="p053014-r00">
        <div className="div81" />
        <div className="div86" />
        <img className="icon39" alt="" src="/-1560.svg" />
      </div>
      <div className="div103">1/5</div>
      <div className="usb">
        <p className="p7">プログラム設定</p>
        <p className="p7">温度データ</p>
        <p className="p7">エラー履歴</p>
        <p className="p7">USBメモリー</p>
      </div>
    </div>
  );
};

export default Component5;
