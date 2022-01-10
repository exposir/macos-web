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
    const children = refContainer.current.children;
    const array = Array.from(children);
    array.forEach((item, index) => {
      console.log(item);
      item.onmouseenter = (e) => {
        item.style.width = "100px";
        item.style.height = "100px";
        item.style.marginBottom = "30px";

        if (array[index - 1]) {
          array[index - 1].style.width = "85px";
          array[index - 1].style.height = "85px";
          array[index - 1].style.marginBottom = "20px";
        }

        if (array[index + 1]) {
          array[index + 1].style.width = "85px";
          array[index + 1].style.height = "85px";
          array[index + 1].style.marginBottom = "20px";
        }

        if (array[index - 2]) {
          array[index - 2].style.width = "70px";
          array[index - 2].style.height = "70px";
          array[index - 2].style.marginBottom = "10px";
        }

        if (array[index + 2]) {
          array[index + 2].style.width = "70px";
          array[index + 2].style.height = "70px";
          array[index + 2].style.marginBottom = "10px";
        }
      };
      item.onmouseleave = (e) => {
        item.style.width = "60px";
        item.style.height = "60px";
        item.style.marginBottom = "0px";

        if (array[index - 1]) {
          array[index - 1].style.width = "60px";
          array[index - 1].style.height = "60px";
          array[index - 1].style.marginBottom = "0px";
        }

        if (array[index + 1]) {
          array[index + 1].style.width = "60px";
          array[index + 1].style.height = "60px";
          array[index + 1].style.marginBottom = "0px";
        }

        if (array[index - 2]) {
          array[index - 2].style.width = "60px";
          array[index - 2].style.height = "60px";
          array[index - 2].style.marginBottom = "0px";
        }

        if (array[index + 2]) {
          array[index + 2].style.width = "60px";
          array[index + 2].style.height = "60px";
          array[index + 2].style.marginBottom = "0px";
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
    </div>
  );
}
export default Dock;
