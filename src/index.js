import style from "./css/index.scss"
import Icon from "./assets/rysunki/LogoOK.svg"

let myIcon = new Image();
myIcon.src = Icon;

document.querySelector("span").appendChild(myIcon);
