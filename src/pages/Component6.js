import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component6.css";

const Component6 = () => {
  const navigate = useNavigate();

  const onP000013RClick = useCallback(() => {
    navigate("/4");
  }, [navigate]);

  const onP000010RClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onP000014RClick = useCallback(() => {
    navigate("/21");
  }, [navigate]);

  return (
    <div className="div104">
      <div className="div105" />
      <div className="div106">12:00</div>
      <div className="p023001-r004">
        <div className="div107" />
        <div className="div108" />
        <div className="div109" />
        <div className="div110" />
      </div>
      <button className="p000013-r004" onClick={onP000013RClick}>
        <div className="div107" />
        <div className="div112" />
        <img className="icon40" alt="" src="/.svg" />
      </button>
      <button className="p000010-r004" onClick={onP000010RClick}>
        <div className="div107" />
        <div className="div114" />
        <img className="icon41" alt="" src="/2.svg" />
      </button>
      <button className="p000014-r004" onClick={onP000014RClick}>
        <div className="div107" />
        <div className="div112" />
        <img className="icon40" alt="" src="/3.svg" />
      </button>
      <img className="p023000-r00-icon4" alt="" src="/p023000r00.svg" />
      <div className="p050100-r00">
        <div className="div107" />
        <div className="div118" />
        <img className="icon43" alt="" src="/-1285.svg" />
      </div>
      <div className="p050111-r00">
        <div className="div107" />
        <div className="div112" />
        <img className="icon44" alt="" src="/-1284.svg" />
      </div>
      <div className="p050100-r001">
        <div className="div107" />
        <div className="div118" />
        <img className="icon43" alt="" src="/-1285.svg" />
      </div>
      <div className="p050111-r001">
        <div className="div107" />
        <div className="div112" />
        <img className="icon44" alt="" src="/-1284.svg" />
      </div>
      <div className="p050100-r002">
        <div className="div107" />
        <div className="div118" />
        <img className="icon43" alt="" src="/-1285.svg" />
      </div>
      <div className="p050111-r002">
        <div className="div107" />
        <div className="div112" />
        <img className="icon44" alt="" src="/-1284.svg" />
      </div>
      <div className="p050100-r003">
        <div className="div107" />
        <div className="div118" />
        <img className="icon43" alt="" src="/-1285.svg" />
      </div>
      <div className="p050111-r003">
        <div className="div107" />
        <div className="div112" />
        <img className="icon44" alt="" src="/-1284.svg" />
      </div>
      <div className="div133">3/5</div>
      <div className="div134">
        <p className="p10">タブ自動切替</p>
        <p className="p10">朝食運転</p>
        <p className="p10">昼食運転</p>
        <p className="p10">夕食運転</p>
      </div>
    </div>
  );
};

export default Component6;
