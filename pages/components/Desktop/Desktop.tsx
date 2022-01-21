import moduleCss from "./Desktop.module.scss";
import dynamic from "next/dynamic";

function Desktop() {
  const Dock = dynamic(() => import("../Dock/Dock"));
  const MenuBar = dynamic(() => import("../MenuBar/MenuBar"));
  const Mask = dynamic(() => import("../Mask/Mask"));

  return (
    <div className={moduleCss.container}>
      <MenuBar />
      <Dock />
      <Mask />
    </div>
  );
}

export default Desktop;
