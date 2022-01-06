import Dock from "../Dock/Dock";
import moduleCss from "./Desktop.module.scss";

function Desktop() {
  return (
    <div className={moduleCss.container}>
      <Dock />
    </div>
  );
}

export default Desktop;
