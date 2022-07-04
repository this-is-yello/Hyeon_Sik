const scrolls = document.querySelectorAll(".scroll");
const scrollCount = scrolls.length;
let moveTop = window.scrollY;

let moveCheck = true;

scrolls.forEach(function (item, index) {
  item.addEventListener("mousewheel", function (e) {
    e.preventDefault();
    if (moveCheck === true) {
      moveCheck = false;
      let delta = 0;

      if (!e) e = window.e;
      if (e.wheelDelta) {
        delta = e.wheelDelta / 120;
        if (window.opera) delta = -delta;
      }
      else if (e.detail)
        delta = -e.detail / 3;

      
      let scrollSelector = scrolls[index];

      if (delta < 0) {
        if (scrollSelector !== scrollCount - 1) {
          try {
            moveTop = window.scrollY + scrollSelector.nextElementSibling.getBoundingClientRect().top;
          } catch (error) {
            console.log(error);
          }
        }
      } else {
        if (scrollSelector !== 0) {
          try {
            moveTop = window.scrollY + scrollSelector.previousElementSibling.getBoundingClientRect().top;
          } catch (error) {
            console.log(error);
          }
        }
      }

      setTimeout(() => {
        moveCheck = true;
      }, 500);
      window.scrollTo({top: moveTop, left: 0, behavior: "smooth"});
    }
  });
});


const downButton = document.querySelector(".arrow-down");

downButton.addEventListener("click", () => {

});
