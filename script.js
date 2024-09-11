let button = document.querySelector("#close-button");
let section = document.querySelector("#main-section");
let x = document.querySelector("#x");

button.addEventListener("click", () => {
  section.style.display = "none"; 

  
  let childElements = section.querySelectorAll("*");
  childElements.forEach(element => {
    element.style.display = "none";
  });


  let topSecondaryBox = section.querySelector(".top-secondary-box");
  if (topSecondaryBox) {
    topSecondaryBox.style.backgroundColor = "transparent"; 
  }

  let mainBox = section.querySelector(".main-box");
  if (mainBox) {
    mainBox.style.backgroundColor = "transparent";
    mainBox.style.border = "none";
  }
});

x.addEventListener("click", () => {
  section.style.display = "none"; 


  let childElements = section.querySelectorAll("*");
  childElements.forEach(element => {
    element.style.display = "none";
  });


  let topSecondaryBox = section.querySelector(".top-secondary-box");
  if (topSecondaryBox) {
    topSecondaryBox.style.backgroundColor = "transparent"; 
  }

  let mainBox = section.querySelector(".main-box");
  if (mainBox) {
    mainBox.style.backgroundColor = "transparent";
    mainBox.style.border = "none";
  }
});


