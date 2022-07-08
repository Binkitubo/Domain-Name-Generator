/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let extension = [".com", ".net", ".us", ".io"];

  const domain = (param1, param2, param3, param4) => {
    for (let i = 0; i < pronoun.length; i++) {
      for (let a = 0; a < adj.length; a++) {
        for (let n = 0; n < noun.length; n++) {
          for (let e = 0; e < extension.length; e++) {
            let resultado = `${param1[i]}${param2[a]}${param3[n]}${param4[e]}`;
            console.log(resultado);
          }
        }
      }
    }
  };
  domain(pronoun, adj, noun, extension);
};
