require("babel-core/register");
import { renderDOM } from "core";
import { ChatPage } from "./ChatPage";

document.addEventListener('DOMContentLoaded', () => {
  renderDOM(new ChatPage());
});