import './less/index.less'

// Your code goes here!
//set up getters
const links= document.querySelectorAll("a.nav-link");
const buttons = document.querySelectorAll("div.btn");

// eventListeners(#1)_click
links.forEach(link => link.addEventListener("click", evt => {
    evt.target.style.color = "blue";
  }))
  // eventListeners(#2&3)_mouseenter&mouseleave
buttons.forEach(btn => btn.addEventListener("mouseenter", evt => {
    evt.target.style.background = 'pink';
}))
buttons.forEach(btn => btn.addEventListener("mouseleave", evt => {
    evt.target.style.background = '';
}))