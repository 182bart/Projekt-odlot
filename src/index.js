import style from "./css/index.scss"
import Icon from "./assets/rysunki/svg/Logo.svg"

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector("span").appendChild(myIcon);
