import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Component4.css";

const Component4 = () => {
  const navigate = useNavigate();

  const onP000013RClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  const onP000010RClick = useCallback(() => {
    navigate("/2");
  }, [navigate]);

  const onP000014RClick = useCallback(() => {
    navigate("/11");
  }, [navigate]);

  return (
    <div className="div59">
      <div className="div60" />
      <div className="div61">12:00</div>
      <div className="p023001-r002">
        <div className="div62" />
        <div className="div63" />
        <div className="div64" />
        <div className="div65" />
      </div>
      <button className="p000013-r002" onClick={onP000013RClick}>
        <div className="div62" />
        <div className="div67" />
        <img className="icon23" alt="" src="/.svg" />
      </button>
      <button className="p000010-r002" onClick={onP000010RClick}>
        <div className="div62" />
        <div className="div69" />
        <img className="icon24" alt="" src="/2.svg" />
      </button>
      <button className="p000014-r002" onClick={onP000014RClick}>
        <div className="div62" />
        <div className="div67" />
        <img className="icon23" alt="" src="/3.svg" />
      </button>
      <img className="p023000-r00-icon2" alt="" src="/p023000r00.svg" />
      <div className="div72">2/5</div>
      <div className="div73">
        <p className="p3">画面の明るさ（1～5段階）</p>
        <p className="p3">タッチ音（0～10段階）</p>
        <p className="p3">完了音（0～10段階）</p>
        <p className="p3">警告音（0～10段階）</p>
      </div>
      <img className="icon26" alt="" src="/-154.svg" />
      <div className="p070002-r00">
        <div className="div62" />
        <img className="icon27" alt="" src="/21.svg" />
      </div>
      <div className="p070001-r00">
        <div className="div62" />
        <img className="icon28" alt="" src="/13.svg" />
      </div>
      <div className="p070004-r00">
        <div className="div62" />
        <img className="icon29" alt="" src="/4.svg" />
      </div>
      <div className="p070007-r00">
        <div className="div62" />
        <img className="icon30" alt="" src="/7.svg" />
      </div>
    </div>
  );
};

export default Component4;
