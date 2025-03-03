const menuCloseButton = document.querySelector(".navegacion__cerrar");
const menuOpenButton = document.querySelector(".navegacion__bars");


menuCloseButton.addEventListener("click", () => {

  document.body.classList.toggle("show-mobile-menu");
});

menuOpenButton.addEventListener("click",()=>{

    document.body.classList.toggle("show-mobile-menu");


})

