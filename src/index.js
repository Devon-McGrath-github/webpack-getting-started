import _ from "lodash";
import myName from "./myName";

function component() {
  const element = document.createElement("div");

  element.textContent = myName("Devon McGrath");

  return element;
}

document.body.appendChild(component());
