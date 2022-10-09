require("babel-core/register");
import { renderDOM, registerComponent} from "../core";

import '../errorPage.scss';

import { Page404 } from "./Page404";

registerComponent(Page404);

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new Page404());
});