import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  let who = [
    "the dog ",
    "my cousin Fernando ",
    "my friend Álvaro ",
    "the neighbour from 4º C ",
    "the Postman ",
    "an elderly gentleman ",
    "a young firefighter ",
    "your brother ",
    "Tina Turner herself "
  ];

  let action = ["hid ", "burnt down ", "stole ", "broke ", "lost ", "crushed "];

  let what = [
    "my laptop ",
    "my mobile phone ",
    "my wallet ",
    "my bootcamp notes ",
    "the house keys ",
    "the car wheels "
  ];
  let when = [
    "this morning. ",
    "yesterday evening. ",
    "when I finished breakfast. ",
    "during last night dinner. ",
    "while I was watching TV. ",
    "after the football match. ",
    "before I went to work. "
  ];

  function changeBackgroundColor() {
    let colors = [
      "rgb(244,67,54)",
      "rgb(233,30,99)",
      "rgb(156,39,176)",
      "rgb(103,58,183)",
      "rgb(63,81,181)",
      "rgb(33,150,243)",
      "rgb(0,188,212)",
      "rgb(0,150,136)",
      "rgb(76,175,80)",
      "rgb(139,195,74)",
      "rgb(205,220,57)",
      "rgb(255,235,59)",
      "rgb(255,193,7)",
      "rgb(255,152,0)",
      "rgb(255,87,34)",
      "rgb(121,85,72)",
      "rgb(158,158,158)",
      "rgb(96,125,139)"
    ];
    let randomColors = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColors;
  }

  function generateExcuse() {
    let [randomWho, randomAction, randomWhat, randomWhen] = [
      Math.floor(Math.random() * who.length),
      Math.floor(Math.random() * action.length),
      Math.floor(Math.random() * what.length),
      Math.floor(Math.random() * when.length)
    ];
    return (
      "Believe it or not, I could not make it because " +
      who[randomWho] +
      action[randomAction] +
      what[randomWhat] +
      when[randomWhen] +
      " I know it sounds weird but I swear it!"
    );
  }

  let excuseElement = document.querySelector("#excuse");

  document.querySelector("button").addEventListener("click", function() {
    let excuse = generateExcuse();
    excuseElement.innerHTML = excuse;
    changeBackgroundColor();
  });
};
