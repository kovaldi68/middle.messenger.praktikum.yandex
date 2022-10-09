require("babel-core/register");
import { renderDOM, registerComponent} from "../core";

import '../errorPage.scss'

import { Page500 } from "./Page500";

registerComponent(Page500);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Page500());
});