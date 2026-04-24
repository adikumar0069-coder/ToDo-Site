const top_bar = document.getElementById("top_bar");
const top_bar_style = window.getComputedStyle(top_bar);
top_bar.style.height = (parseFloat(top_bar_style.width))/20 + "px";