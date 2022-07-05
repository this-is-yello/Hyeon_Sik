onePageScroll();
downBtn();
sideBar(false);

function onePageScroll() {
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
              sideBar(index);
            } catch (error) {
              console.log(error);
            }
          }
        } else {
          if (scrollSelector !== 0) {
            try {
              moveTop = window.scrollY + scrollSelector.previousElementSibling.getBoundingClientRect().top;
              sideBar(index-2);
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
  
  const sections = document.getElementsByTagName("section");
  
    downButton.addEventListener("click", () => {
      const nextSection = window.scrollY/window.innerHeight;
      window.scrollTo({top: sections[nextSection].offsetTop, left: 0, behavior: "smooth"});
      sideBar(nextSection);
  });
  
}

function downBtn() {
  
}

function sideBar(index) {
  const sections = document.getElementsByTagName("section");

  const sideBar = document.querySelector(".side-bar");

  for (let i = 0; i < sideBar.childElementCount; i++) {
    sideBar.children[i].addEventListener("click", () => {
      window.scrollTo({top: sections[i].offsetTop, behavior: "smooth"});
    });
  }

  let moveCheck = true;
  
  sideBtns = document.querySelectorAll('.side-btn');
  sideBtns[0].classList.add('side-btn-opacity');
  
  for (let j = 0; j < sideBtns.length; j++) {
    sideBtns[j].addEventListener("click", () => {
      if(moveCheck){
        moveCheck=false;

        clearButton();
        sideBtns[j].classList.add('side-btn-opacity');
        
        setTimeout(function(){
           moveCheck=true;
        }, 500);
      }
    });

    if(index!==false){
      clearButton();
      sideBtns[Number(index)].classList.add('side-btn-opacity');
    }

    // sections[j].addEventListener("mousewheel", (e) => {
    //   if(moveCheck){
    //     moveCheck=false;

    //     console.log(e.wheelDelta)
    //     clearButton();

    //     try {
    //       if(e.wheelDelta > 0 ) {
    //         sideBtns[j-1].classList.add('side-btn-opacity');
    //       }else{
    //         sideBtns[j+1].classList.add('side-btn-opacity');
    //       }
    //     } catch (error) {
    //       console.log('oops..!');
    //     }
        
    //     setTimeout(function(){
    //       moveCheck=true;
    //     }, 500);

    //     const main = document.getElementById("main");
    //     const footer = document.getElementsByClassName("footer");

    //     main.addEventListener("mousewheel", (e) => {
    //       if (e.wheelDelta < 0) {
    //         sideBtns[0].classList.add('side-btn-opacity');
    //       }
    //     })
    //   }
    // });
  }
  
  function clearButton(){
    for(let k = 0 ; k < sideBtns.length ; k++){
      sideBtns[k].classList.remove('side-btn-opacity');
    }
  }
}
