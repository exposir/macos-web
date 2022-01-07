import Dock from "../Dock/Dock";
import MenuBar from "../MenuBar/MenuBar";
import moduleCss from "./Desktop.module.scss";

function Desktop() {
  return (
    <div className={moduleCss.container}>
      <MenuBar />
      <Dock />
    </div>
  );
}

export default Desktop;
