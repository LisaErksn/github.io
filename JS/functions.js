//---------Animation logo--------
export function animateLogo() {
    const logo = document.querySelector(".banniere-logo");
    const span = document.querySelector(".span-logo");
    window.addEventListener("load", () => {
      span.classList.add("span-logo-bounce");
      logo.classList.add("banniere-logo-translate");
      setTimeout(() => {
        span.classList.remove("span-logo-bounce");
      }, 2000);
      setTimeout(() => {
        logo.classList.remove("banniere-logo-translate");
      }, 2000);
    });
  }
  
  //-------Apparition navbar-------
  
  export function apparitionNavbar() {
    const navBtn = document.getElementById("nav-btn");
    const btnNav = document.querySelector(".nav-brand");
    const navList = document.querySelector(".navbar-links");
  
    navBtn.addEventListener("click", () => {
      navList.classList.toggle("navbar-collapse");
    });
  }
  
  //-------Bouton bannière-------
  
  export function banniereBtn(sectionId) {
    const btnBanniere = document.querySelector(".banniere-btn");
    btnBanniere.addEventListener("click", () => {
      const nextSection =
        btnBanniere.parentElement.parentElement.nextElementSibling;
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    });
  }
  
  //-------Opacity image-------
  
  export function opacityVideo() {
    const videoContainer = document.querySelectorAll(".videos-container");
    videoContainer.forEach((element) => {
      element.addEventListener("mouseenter", (e) => {
        const videoOpacity = e.currentTarget.firstElementChild;
        const videoText = videoOpacity.firstElementChild;
        const videoLink = videoText.firstElementChild;
        videoOpacity.classList.add("videos-opacity-visible");
        videoText.classList.add("text-transform");
        videoLink.classList.add("a-transform");
      });
      element.addEventListener("mouseleave", (e) => {
        const videoOpacity = e.currentTarget.firstElementChild;
        const videoText = videoOpacity.firstElementChild;
        const videoLink = videoText.firstElementChild;
        videoOpacity.classList.remove("videos-opacity-visible");
        videoText.classList.remove("text-transform");
        videoLink.classList.remove("a-transform");
      });
    });
  }
  
  //-------Apparition vidéo-------
  
  export function popupOpen() {
    const videoLink = document.querySelectorAll(".popup-link");
    videoLink.forEach((e) => {
      e.addEventListener("click", (e) => {
        console.log("hello popup video");
        const divParent = e.currentTarget.parentElement.parentElement;
        const videoPopup = divParent.nextElementSibling;
        videoPopup.style.transform = "translateY(100px)";
        videoPopup.style.opacity = "1";
        videoPopup.classList.add("videos-visible");
        window.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            console.log("Hola Escape");
            videoPopup.style.transform = "translateY(-60px)";
            videoPopup.classList.remove("videos-visible");
            videoPopup.style.opacity = "0";
          }
        });
      });
    });
  }
  popupOpen();
  
  //-------Disparition vidéo-------
  export function popupClose() {
    const btnClose = document.querySelectorAll(".popup-close1");
  
    const videoPopups = document.querySelectorAll(".videos-visible");
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        videoPopups.classList.remove("videos-visible");
      }
    });
  
    btnClose.forEach((e) => {
      e.addEventListener("click", (e) => {
        const videoPopup = e.currentTarget.parentElement.parentElement;
        videoPopup.style.transform = "translateY(-60px)";
        videoPopup.classList.remove("videos-visible");
        videoPopup.style.opacity = "0";
      });
    });
  }
  