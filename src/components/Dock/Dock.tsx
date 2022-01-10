import moduleCss from "./Dock.module.scss";
import DockItem from "../DockItem/DockItem";
import canader from "../../asset/canader.webp";
import finder from "../../asset/finder.webp";
import setting from "../../asset/setting.webp";
import safari from "../../asset/safari.webp";
import vscode from "../../asset/vscode.webp";
import store from "../../asset/store.webp";

import { useEffect, useRef } from "react";

function Dock() {
  const refContainer = useRef(null);
  useEffect(() => {
    const { children } = refContainer.current || { children: [] };
    const array = Array.from(children);
    array.forEach((item: any, index) => {
      const a = array[index - 1];
      const b = array[index + 1];
      const c = array[index - 2];
      const d = array[index + 2];

      item.onmouseenter = () => {
        item.style.width = "100px";
        item.style.height = "100px";
        item.style.marginBottom = "30px";

        if (a) {
          const { style = { width: "", height: "", marginBottom: "" } } = a;
          style.width = "85px";
          style.height = "85px";
          style.marginBottom = "20px";
        }

        if (b) {
          const { style = { width: "", height: "", marginBottom: "" } } = b;
          style.width = "85px";
          style.height = "85px";
          style.marginBottom = "20px";
        }

        if (c) {
          const { style = { width: "", height: "", marginBottom: "" } } = c;
          style.width = "70px";
          style.height = "70px";
          style.marginBottom = "10px";
        }

        if (d) {
          const { style = { width: "", height: "", marginBottom: "" } } = d;
          style.width = "70px";
          style.height = "70px";
          style.marginBottom = "10px";
        }
      };
      item.onmouseleave = () => {
        item.style.width = "60px";
        item.style.height = "60px";
        item.style.marginBottom = "0px";

        if (a) {
          const { style = { width: "", height: "", marginBottom: "" } } = a;

          style.width = "60px";
          style.height = "60px";
          style.marginBottom = "0px";
        }

        if (b) {
          const { style = { width: "", height: "", marginBottom: "" } } = b;

          style.width = "60px";
          style.height = "60px";
          style.marginBottom = "0px";
        }

        if (c) {
          const { style = { width: "", height: "", marginBottom: "" } } = c;

          style.width = "60px";
          style.height = "60px";
          style.marginBottom = "0px";
        }

        if (d) {
          const { style = { width: "", height: "", marginBottom: "" } } = d;

          style.width = "60px";
          style.height = "60px";
          style.marginBottom = "0px";
        }
      };
    });
  }, []);

  return (
    <div ref={refContainer} className={moduleCss.Dock}>
      <DockItem src={finder} />
      <DockItem src={canader} />
      <DockItem src={safari} />
      <DockItem src={vscode} />
      <DockItem src={store} />
      <DockItem src={setting} />
      <DockItem src={setting} />
      <DockItem src={setting} />
      <DockItem src={setting} />
      <DockItem src={setting} />
      <DockItem src={setting} />
      <DockItem src={setting} />
      <DockItem src={setting} />
    </div>
  );
}
export default Dock;
