let text = document.querySelector(".text p");

  text.innerHTML = text.innerHTML.split("").map((char,i)=>
  `<b style="transform:rotate(${i * 77.7}deg")>${char}</b>`
  ).join("");
