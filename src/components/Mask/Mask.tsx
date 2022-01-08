import moduleCss from "./Mask.module.scss";
import { useState, useEffect } from "react";
import AppleIcon from "../AppleIcon/AppleIcon";

function Mask() {
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
