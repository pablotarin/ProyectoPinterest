import "./ImageCardComponent.css";
import { CardVisitLink } from "../CardVisitLink/CardVisitLink";
import { StatsComponent } from "../StatsComponent/StatsComponent";

export const ImageCardComponnent = ({ src, alt, dataD, dataV }) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  img.classList.add("imgDiv");

  div.classList.add("imgCardDiv");
  const a = CardVisitLink("Visitar", "visitButton");
  const statsDiv = document.createElement("div");
  statsDiv.classList.add("statsDiv");
  const downloads = StatsComponent({
    data: dataD,
    classList: 'uil-download-alt'
  });
  const views = StatsComponent({
    data: dataV,
    classList: 'uil-eye'
  });
  statsDiv.append(views, downloads);
  div.append(statsDiv, img, a);

  return div;
};
