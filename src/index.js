import './less/index.less'

// Your code goes here!
//set up getters
const links= document.querySelectorAll("a.nav-link");
const buttons = document.querySelectorAll("div.btn");

// eventListeners(#1)_click
links.forEach(link => link.addEventListener("click", evt => {
    evt.target.style.color = "blue";
  }))