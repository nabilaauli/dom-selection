//DOM Selection

// getElementById -> element
const judul = document.getElementById("judul");
judul.style.color = "white";
judul.style.backgroundColor = "Purple";
judul.innerHTML = "Aulia";

//getElementsBytagName -> HTMLcolection
const p = document.getElementsByTagName("p");
// p[2].style.color = "blue";
p[0].style.backgroundColor = "blue";
p[1].style.backgroundColor = "violet";
p[2].style.backgroundColor = "orange";

for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "grey";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "28px";
h1.style.color = "white";
