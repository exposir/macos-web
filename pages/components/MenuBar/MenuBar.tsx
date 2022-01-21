import moduleCss from "./MenuBar.module.scss";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function Dock() {
  const AppleIcon = dynamic(() => import("../AppleIcon/AppleIcon"));
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(async () => {
      const dayjs = (await import("dayjs")).default;
      const zhCn = (await import("dayjs/locale/zh-cn")).default;
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
      <div>{time ? time : "loading..."}</div>
    </div>
  );
}
export default Dock;
