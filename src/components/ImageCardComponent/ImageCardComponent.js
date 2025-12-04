import "./ImageCardComponent.css";
import { CardButton } from "../CardButton/CardButton";
import { StatsComponent } from "../StatsComponent/StatsComponent";

export const ImageCardComponnent = ({ src, alt, dataD, dataV }) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.classList.add("imgDiv");

  div.classList.add("imgCardDiv");
  const a = CardButton();
  const statsDiv = document.createElement("div");
  statsDiv.classList.add("statsDiv");
  const d = StatsComponent({
    data: dataD,
    classList: 'uil-download-alt'
  });
  const v = StatsComponent({
    data: dataV,
    classList: 'uil-eye'
  });
  statsDiv.append(v, d);
  div.append(statsDiv, img, a);

  return div;
};
