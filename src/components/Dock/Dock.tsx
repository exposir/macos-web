import moduleCss from "./Dock.module.scss";
import DockItem from "../DockItem/DockItem";

import { useEffect, useRef } from "react";

function Dock() {
  const refContainer = useRef(null);
  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    const { children } = refContainer.current || { children: [] };
    const array = Array.from(children);
    array.forEach((item: any, index) => {
      const xlSize = 100;
      const XlMarginBottom = 30;
      const lSize = 80;
      const lMarginBottom = 20;
      const mSize = 70;
      const mMarginBottom = 10;

      const defaultSize = 60;
      const defaulteMarginBottom = 10;

      const LLeftItem = array[index - 1];
      const LRightItem = array[index + 1];
      const mLeftItem = array[index - 2];
      const mRightMItem = array[index + 2];

      const changeSize = (item: any, size: any, marginBottom: any) => {
        item.style.width = `${size}px`;
        item.style.height = `${size}px`;
        item.style.marginBottom = `${marginBottom}px`;
      };

      item.onmouseenter = () => {
        changeSize(item, xlSize, XlMarginBottom);
        LLeftItem && changeSize(LLeftItem, lSize, lMarginBottom);
        LRightItem && changeSize(LRightItem, lSize, lMarginBottom);
        mLeftItem && changeSize(mLeftItem, mSize, mMarginBottom);
        mRightMItem && changeSize(mRightMItem, mSize, mMarginBottom);
      };

      item.onmouseleave = () => {
        changeSize(item, defaultSize, defaulteMarginBottom);
        LLeftItem && changeSize(LLeftItem, defaultSize, defaulteMarginBottom);
        LRightItem && changeSize(LRightItem, defaultSize, defaulteMarginBottom);
        mLeftItem && changeSize(mLeftItem, defaultSize, defaulteMarginBottom);
        mRightMItem &&
          changeSize(mRightMItem, defaultSize, defaulteMarginBottom);
      };
    });
  }

  const canader =
    "https://raw.githubusercontent.com/exposir/beds/main/macos-web/canader.webp";
  const finder =
    "https://raw.githubusercontent.com/exposir/beds/main/macos-web/finder.webp";
  const safari =
    "https://raw.githubusercontent.com/exposir/beds/main/macos-web/safari.webp";
  const vscode =
    "https://raw.githubusercontent.com/exposir/beds/main/macos-web/vscode.webp";
  const store =
    "https://raw.githubusercontent.com/exposir/beds/main/macos-web/store.webp";
  const setting =
    "https://raw.githubusercontent.com/exposir/beds/main/macos-web/setting.webp";

  return (
    <div ref={refContainer} className={moduleCss.Dock}>
      <DockItem src={finder} />
      <DockItem src={canader} />
      <DockItem src={safari} />
      <DockItem src={vscode} />
      <DockItem src={store} />
      <DockItem src={setting} />
    </div>
  );
}
export default Dock;
