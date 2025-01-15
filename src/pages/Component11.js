import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import P000008R from "../components/P000008R";
import "./Component11.css";

const Component11 = () => {
  const navigate = useNavigate();

  const onP000002RClick = useCallback(() => {
    navigate("/14");
  }, [navigate]);

  const onP000001RClick = useCallback(() => {
    navigate("/15");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    navigate("/6");
  }, [navigate]);

  const onButtonClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="div203">
      <div className="div204" />
      <div className="div205">12:00</div>
      <img className="p025400-r00-icon1" alt="" src="/p025400r00.svg" />
      <div className="p021100-r002">
        <div className="div206" />
      </div>
      <img className="p021101-r00-icon1" alt="" src="/p021101r00.svg" />
      <img className="p075013-r00-icon1" alt="" src="/p075013r00.svg" />
      <img className="icon116" alt="" src="/-437--2.svg" />
      <button className="p000002-r00" onClick={onP000002RClick}>
        <div className="div207" />
        <div className="div208" />
        <img className="icon117" alt="" src="/-1290.svg" />
      </button>
      <button className="p000001-r002" onClick={onP000001RClick}>
        <div className="div207" />
        <div className="div210" />
        <img className="icon118" alt="" src="/-1288.svg" />
      </button>
      <P000008R
        p000008R00Left="160px"
        prop="/-1292.svg"
        iconTop="calc(50% - 14.04px)"
        iconLeft="calc(50% - 9.97px)"
        iconWidth="59.7px"
        iconRight="unset"
        prop1="/-133.svg"
        iconTop1="calc(50% - 16.4px)"
        iconLeft1="22px"
        iconHeight="35.3px"
        iconWidth1="33.5px"
      />
      <div className="p070099-r005">
        <div className="div207" />
      </div>
      <div className="p070204-r001">
        <div className="div207" />
        <img className="icon119" alt="" src="/41.svg" />
      </div>
      <div className="p070205-r004">
        <div className="div207" />
        <img className="icon120" alt="" src="/51.svg" />
      </div>
      <div className="p070213-r002">
        <div className="div207" />
        <img className="icon121" alt="" src="/-596.svg" />
      </div>
      <div className="p070201-r003">
        <div className="div207" />
        <img className="icon122" alt="" src="/12.svg" />
      </div>
      <div className="p070201-r004">
        <div className="div207" />
        <img className="icon122" alt="" src="/12.svg" />
      </div>
      <div className="p070205-r005">
        <div className="div207" />
        <img className="icon120" alt="" src="/51.svg" />
      </div>
      <div className="p070211-r004">
        <div className="div207" />
        <img className="icon125" alt="" src="/-588.svg" />
      </div>
      <div className="p070099-r006">
        <div className="div207" />
      </div>
      <div className="p070202-r001">
        <div className="div207" />
        <img className="icon126" alt="" src="/22.svg" />
      </div>
      <div className="p070205-r006">
        <div className="div207" />
        <img className="icon120" alt="" src="/51.svg" />
      </div>
      <div className="p070213-r003">
        <div className="div207" />
        <img className="icon121" alt="" src="/-596.svg" />
      </div>
      <div className="p070099-r007">
        <div className="div207" />
      </div>
      <div className="p070207-r002">
        <div className="div207" />
        <img className="icon129" alt="" src="/71.svg" />
      </div>
      <div className="p070200-r002">
        <div className="div207" />
        <img className="icon130" alt="" src="/01.svg" />
      </div>
      <div className="p070211-r005">
        <div className="div207" />
        <img className="icon125" alt="" src="/-588.svg" />
      </div>
      <div className="p070099-r008">
        <div className="div207" />
      </div>
      <div className="p070099-r009">
        <div className="div207" />
      </div>
      <div className="p070205-r007">
        <div className="div207" />
        <img className="icon120" alt="" src="/51.svg" />
      </div>
      <div className="p070211-r006">
        <div className="div207" />
        <img className="icon125" alt="" src="/-588.svg" />
      </div>
      <img className="icon134" alt="" src="/-19411.svg" />
      <div className="p021014-r001">
        <img className="icon135" alt="" src="/-104.svg" />
        <button className="button2" onClick={onButtonClick} />
        <img className="icon136" alt="" src="/-1238.svg" />
        <img className="icon137" alt="" src="/-56.svg" />
      </div>
      <div className="p021013-r002">
        <img className="icon135" alt="" src="/-104.svg" />
        <button className="button2" onClick={onButtonClick1} />
        <img className="icon139" alt="" src="/-1242.svg" />
        <img className="icon140" alt="" src="/-1031.svg" />
      </div>
      <img className="p021012-r00-icon3" alt="" src="/p021012r00.svg" />
      <img className="p021011-r00-icon3" alt="" src="/p021011r00.svg" />
      <img className="p021000-r00-icon" alt="" src="/p021000r00.svg" />
      <div className="p021020-r003">
        <div className="p0210203" />
      </div>
      <img className="p002110-r00-icon1" alt="" src="/p002110r00.svg" />
      <P000008R
        p000008R00Left="0px"
        prop="/-1294.svg"
        iconTop="calc(50% - 12.7px)"
        iconLeft="unset"
        iconWidth="81.5px"
        iconRight="19.24px"
        prop1="/-131.svg"
        iconTop1="calc(50% - 17px)"
        iconLeft1="14px"
        iconHeight="35px"
        iconWidth1="32.5px"
      />
    </div>
  );
};

export default Component11;
