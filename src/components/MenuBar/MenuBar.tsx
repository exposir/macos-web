import moduleCss from "./MenuBar.module.scss";
import dayjs from "dayjs";
import zhCn from "dayjs/locale/zh-cn";
import { useEffect, useState } from "react";
import AppleIcon from "../AppleIcon/AppleIcon";

function Dock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      const dayjsZh = dayjs().locale(zhCn);

      const day = dayjsZh.format("MMMD日");
      const week = dayjsZh.format("ddd");
      const time = dayjsZh.format("a h:mm");
      setTime(`${day} ${week} ${time}`);
    }, 1000);
  }, []);

  return (
    <div className={moduleCss.MenuBar}>
      <AppleIcon size="18px" color="black" />
      <div>{time}</div>
    </div>
  );
}
export default Dock;
