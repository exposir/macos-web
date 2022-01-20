import moduleCss from "./Desktop.module.scss";
import Dock from "../Dock/Dock";
import MenuBar from "../MenuBar/MenuBar";
import Mask from "../Mask/Mask";

function Desktop() {
  return (
    <div className={moduleCss.container}>
      <MenuBar />
      <Dock />
      <Mask />
    </div>
  );
}

export default Desktop;
