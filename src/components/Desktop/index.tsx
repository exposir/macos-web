import Dock from "../Dock";
import MenuBar from "../MenuBar";
import moduleCss from "./style.module.scss";

function Desktop() {
  return (
    <div className={moduleCss.container}>
      <MenuBar />
      <Dock />
    </div>
  );
}

export default Desktop;
