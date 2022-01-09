import moduleCss from "./Dock.module.scss";
import DockItem from "../DockItem/DockItem";
import canader from "../../asset/canader.png";

function Dock() {
  return (
    <div className={moduleCss.Dock}>
      <DockItem src={canader} />
      <DockItem src={canader} />
      <DockItem src={canader} />
      <DockItem src={canader} />
      <DockItem src={canader} />
      <DockItem src={canader} />
      <DockItem src={canader} />
      <DockItem src={canader} />
    </div>
  );
}
export default Dock;
