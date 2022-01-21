import moduleCss from "./Mask.module.scss";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

function Mask() {
  const AppleIcon = dynamic(() => import("../AppleIcon/AppleIcon"));
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000);
  }, []);

  return show ? (
    <div className={moduleCss.mask}>
      <AppleIcon size="120px" color="white" />
    </div>
  ) : null;
}

export default Mask;
