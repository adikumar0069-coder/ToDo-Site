const threedot = document.getElementById("threedot");
const search = document.getElementById("search");
const visible = document.getElementById("visible");
const hidden = document.getElementById("hidden");

function opensearch(){
    visible.style.display = "none";
    hidden.style.display = "flex";
}

search.addEventListener("click", opensearch)
