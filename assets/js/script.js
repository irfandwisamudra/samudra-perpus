var index = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = "block";
  setTimeout(carousel, 2000);
}

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");
  const closeBtn = document.querySelector(".close-btn");
  const menuLinks = document.querySelectorAll(".menu a");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeBtn.classList.toggle("active");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("active");
    closeBtn.classList.remove("active");
  });

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menu.classList.remove("active");
      closeBtn.classList.remove("active");
    });
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggle) {
      menu.classList.remove("active");
      closeBtn.classList.remove("active");
    }
  });
});
