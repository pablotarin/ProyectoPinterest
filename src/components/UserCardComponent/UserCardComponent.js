import "./UserCardComponent.css";

export const UserCardComponent = ({
  userPhoto,
  name,
  datePublish = "03/12/2025",
  color = "black",
  likes = 0,
  visits = 0,
}) => {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const pName = document.createElement("p");
  const pDate = document.createElement("p");
  const dateDiv = document.createElement("div");
  const dateImg = document.createElement("img");

  img.src = userPhoto || "../../assets/logoPinterest.png";
  img.alt = name || "User";
  img.style.borderColor = color;
  img.classList.add("userImg");
  pName.textContent = name;

  dateImg.src = "src/assets/subido.png";
  dateImg.alt = "Subido";
  pDate.textContent = datePublish;
  dateDiv.classList.add("dateDiv");
  dateDiv.append(dateImg, pDate);

  div.classList.add("userDiv");

  div.append(img, pName, dateDiv);

  return div;
};
